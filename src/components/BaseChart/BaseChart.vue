<template>
  <canvas ref="chartElement" />
</template>

<script lang="ts">
/* eslint-disable */
import dayjs from 'dayjs'
import Chart from 'chart.js/auto'
import { cloneDeep } from 'lodash'
import { defineComponent } from 'vue'
import { ref } from '@vue/reactivity'
import useFormatter from '@/composables/useFormatter'
import { onMounted, PropType } from '@vue/runtime-core'

const isFutureDate = (date: string, interval: any) => dayjs(date).isAfter(dayjs().startOf(interval), interval)

export default defineComponent({
  props: {
    labels: {
      type: Array as PropType<string[]>,
      required: true
    },
    plots: {
      type: Array as PropType<any[]>,
      required: true
    },
    interval: {
      type: String,
      required: true
    }
  },
  setup(props, { emit }) {
    const chart = ref()
    const chartElement = ref()
    const processedPlots = cloneDeep(props.plots).map(plot => {
      plot.data = plot.data.map((value: number, index: number) => (isFutureDate(props.labels[index], props.interval) ? NaN : value))
      return plot
    })
    const { format } = useFormatter()
    const formatLabel = (label: string) => {
      if (props.interval === 'hour') return dayjs(label).format('ha')
      else if (props.interval === 'day') return dayjs(label).format('ddd, D MMM')
      else if (props.interval === 'month') return dayjs(label).format('MMMM')
      else throw new Error('Invalid interval.')
    }
    onMounted(() => {
      chart.value = new Chart(chartElement.value, {
        type: 'line',
        options: {
          onClick(_, [element]) {
            if (!element) return
            if (props.interval === 'hour') return
            emit('drillDown', {
              date: dayjs(props.labels[element.index]).format('YYYY-MM-DD'),
              period: `${props.interval}-1`
            })
          },
          onHover(event) {
            const target = event.native?.target as HTMLElement
            target.style.cursor = props.interval === 'month' ? 'pointer' : props.interval === 'day' ? 'pointer' : 'default'
          },
          responsive: true,
          maintainAspectRatio: false,
          interaction: {
            mode: 'nearest',
            intersect: false,
            axis: 'x'
          },
          animation: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: '#262626',
              multiKeyBackground: '#3B82F6',
              titleMarginBottom: 8,
              bodySpacing: 6,
              footerMarginTop: 8,
              padding: 10,
              titleFont: { family: "'Inter var', sans", size: 18, weight: 'bold' },
              bodyFont: { family: "'Inter var', sans", size: 14 },
              footerFont: { family: "'Inter var', sans", size: 14 },
              callbacks: {
                title: ([tooltip]) => formatLabel(tooltip.label),
                afterBody([tooltip]) {
                  return processedPlots
                    .map(plot => {
                      const label = plot.label
                      const value = plot.format === 'currency' ? format.currency(plot.data[tooltip.dataIndex]) : plot.data[tooltip.dataIndex]
                      return `${value} ${label}`
                    })
                    .join('\n')
                },
                footer() {
                  return props.interval === 'month' ? 'Click to view month →' : props.interval === 'day' ? 'Click to view day →' : ''
                },
                label: () => ''
              }
            }
          },
          scales: {
            y: {
              suggestedMax: 8,
              beginAtZero: true,
              ticks: { maxTicksLimit: 9, color: '#737373', precision: 0 },
              grid: { drawBorder: false, borderColor: '#D4D4D4' }
            },
            x: {
              grid: { display: false, drawBorder: false },
              ticks: {
                color: '#737373',
                maxTicksLimit: 8,
                callback(this: any, value) {
                  return formatLabel(this.getLabelForValue(value))
                }
              }
            }
          }
        },
        data: {
          labels: props.labels,
          datasets: [
            {
              data: processedPlots[0].data,
              borderColor: '#3B82F6',
              backgroundColor: 'rgba(223, 237, 255, 0.5)',
              borderCapStyle: 'round',
              borderJoinStyle: 'round',
              fill: true,
              pointRadius: 0,
              pointHitRadius: 0,
              pointHoverRadius: 0
            }
          ]
        }
      })
    })
    return { chartElement }
  }
})
</script>
