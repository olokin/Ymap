import { minCM } from '../utils/index'

export default {
  data() {
    return {
      fileTemp: null,
      isMobile: false,
      isImport: false,
      suffixName: '进度图',
      minComg: 1,
      maxComg: 1,
      myChart: null,
      dialogVisible: false,
      markName: '目标',
      finshName: '已完成',
      scoreName: '本期完成',
      behaviorName: '行为',
      leading: '领先指标',
      dialogTitle: '明细列表',
      borderColor: ['green', 'blue', 'red'],
      barColor: ['#91cc75', '#5470c6', '#ee6666'],
      form: {
        name1: '当月已完成目标',
        name2: '提供统计数据、分析统计分析',
        name3: '见面客户及其信任方',
        orientation1: 1,
        orientation2: 1,
        statistics1: 1,
        statistics2: 1,
        customer1: 1,
        customer2: 1,
      },
      listData: [],
      detailForm: {
        isEdit1: false,
        headName1: '',
        isEdit2: false,
        headName2: '',
        isEdit3: false,
        headName3: '',
        isEdit4: false,
        headName4: '',
        isEdit5: false,
        headName5: '',
      },
    }
  },
  computed: {
    objectSpanMethod() {
      return ({ row, column, rowIndex, columnIndex }) => {
        if ([0, 1, 2, 5].includes(columnIndex)) {
          if (row.id === 1) {
            const len = this.listData.filter(v => v.id === 1).length

            if (rowIndex === 0) {
              return {
                rowspan: len,
                colspan: 1
              }
            } else {
              return {
                rowspan: 0,
                colspan: 0
              }
            }
          } else if (row.id === 2) {
            let inx = this.listData.map(o=>o.id).indexOf(2)
            const len = this.listData.filter(v => v.id === 2).length

            if (rowIndex === inx) {
              return {
                rowspan: len,
                colspan: 1
              }
            } else {
              return {
                rowspan: 0,
                colspan: 0
              }
            }
          } else {
            let inx = this.listData.map(o=>o.id).indexOf(3)
            const len = this.listData.filter(v => v.id === 3).length

            if (rowIndex === inx) {
              return {
                rowspan: len,
                colspan: 1
              }
            } else {
              return {
                rowspan: 0,
                colspan: 0
              }
            }
          }
        }
      }
    },
    shoIcon() {
      return (id) => {
        const len = this.listData.filter(v => v.id === id).length

        if (len > 1) return true
        return false
      }
    },
  },
  created() {
    this.initPage()
  },
  mounted() {
    document.addEventListener('DOMContentLoaded', () => {
      const width = document.body.clientWidth
      const dom = document.querySelector('#main')

      if (width < 900) {
        this.isMobile = true
        // dom.style.width = width - 30 + 'px'
        // dom.style.height = width * 1.3 - 30 + 'px'
        // dom.style.padding = '20px 10px'
      } else {
        // const wid = document.body.clientWidth
        // const hei = document.body.clientHeight
        // let cal = Math.min(wid, hei) - 123
        // if (cal > 1000) cal = 1000

        // dom.style.width = cal + 'px'
        // dom.style.height = cal + 'px'
      }

      this.$nextTick(() => {
        this.init()
      })
    }, false)
  },
  methods: {
    initPage() {
      const list = JSON.parse(localStorage.getItem('listJson')) || []
      const infoObj = JSON.parse(localStorage.getItem('infoJson')) || {}

      this.detailForm.headName1 = this.leading
      this.detailForm.headName2 = this.markName
      this.detailForm.headName3 = this.finshName
      this.detailForm.headName4 = this.scoreName
      this.detailForm.headName5 = this.behaviorName

      if (list.length >= 3) {
        this.listData = list
        this.detailForm = {
          ...this.detailForm,
          ...infoObj
        }

        this.leading = infoObj.headName1
        this.markName = infoObj.headName2
        this.finshName = infoObj.headName3
        this.scoreName = infoObj.headName4
        this.behaviorName = infoObj.headName5

        const list1 = this.listData.filter(v => v.id === 1)
        const list2 = this.listData.filter(v => v.id === 2)
        const list3 = this.listData.filter(v => v.id === 3)

        this.form.name1 = list1[0].name
        this.form.name2 = list2[0].name
        this.form.name3 = list3[0].name

        this.form.orientation1 = list1[0].mark
        this.form.orientation2 = list1[0].finsh
        this.form.statistics1 = list2[0].mark
        this.form.statistics2 = list2[0].finsh
        this.form.customer1 = list3[0].mark
        this.form.customer2 = list3[0].finsh
      } else {
        this.listData = [
          {
            id: 1,
            name: this.form.name1,
            mark: 1,
            finsh: 1,
            score: 1,
            behavior: '',
          },
          {
            id: 2,
            name: this.form.name2,
            mark: 1,
            finsh: 1,
            score: 1,
            behavior: '',
          },
          {
            id: 3,
            name: this.form.name3,
            mark: 1,
            finsh: 1,
            score: 1,
            behavior: '',
          },
        ]
      }

      this.setDocummentTitle()
    },
    setDocummentTitle() {
      document.title = this.leading + this.suffixName
    },
    editHandler(num, flag=true) {
      this.$set(this.detailForm, `isEdit${num}`, flag)
    },
    delRow(inx) {
      this.listData.splice(inx, 1)
    },
    newRow(obj, inx) {
      const len = this.listData.filter(v => v.id === obj.id).length

      this.listData.splice(len+inx, 0, {
        id: obj.id,
        name: obj.name,
        mark: obj.mark,
        finsh: obj.finsh,
        score: 0,
        behavior: '',
      })
    },
    tableRowClassName({row, rowIndex}) {
      if (row.id !== 2) {
        return 'warning-row';
      }
      return '';
    },
    downExcel() {
      const arr = [this.detailForm.headName1 || this.leading, this.detailForm.headName2 || this.markName, this.detailForm.headName3 || this.finshName, this.detailForm.headName4 || this.scoreName, this.detailForm.headName5 || this.behaviorName]
      this.downXLSX2(this.listData, this.leading+this.suffixName, arr)
    },
    setWidth(label) {
      switch (label) {
        case 'name':
          return 250
        case 'mark':
          return 111
        case 'finsh':
          return 111
        case 'score':
          return 111
        case 'behavior':
          return 500
      }
    },
    downXLSX2(list, fileName, columns) {
      // 列标题
      let tableData = '<tr>'
      columns.forEach(v => {
        tableData += `<td>${v}</td>`
      })
      tableData += '</tr>'

      // 循环遍历，每行加入tr标签，每个单元格加td标签
      list.forEach((v, inx) => {
        tableData += '<tr>'
        for (let it in v) {
          if (it !== 'id') {
            if (['name', 'mark', 'finsh', ].includes(it)) {
              if (v.id === 1) {
                if (inx === 0) {
                  const len = this.listData.filter(ob => ob.id === 1).length
                  tableData += `<td width=${this.setWidth(it)}  height="66" rowspan=${len}>${ v[it] + '\t'}</td>`
                }
              } else if (v.id === 2) {
                let index = this.listData.map(o=>o.id).indexOf(2)
                
                if (inx === index) {
                  const len = this.listData.filter(ob => ob.id === 2).length
                  tableData += `<td width=${this.setWidth(it)}  height="66" rowspan=${len}>${ v[it] + '\t'}</td>`
                }
              } else {
                let index = this.listData.map(o=>o.id).indexOf(3)

                if (inx === index) {
                  const len = this.listData.filter(ob => ob.id === 3).length
                  tableData += `<td width=${this.setWidth(it)}  height="66" rowspan=${len}>${ v[it] + '\t'}</td>`
                }
              }
            } else {
              // 增加 \t 为了不让表格显示科学计数法或者其他格式
              tableData += `<td width=${this.setWidth(it)} height="66">${ v[it] + '\t'}</td>`
            }
          }
        }
        tableData += '</tr>'
      })

      // Worksheet名
      let worksheet = 'Sheet1'
      let uri = 'data:application/vnd.ms-excel;base64,';

      // 下载的表格模板数据
      let template = `
        <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">
          <head>
            <!--[if gte mso 9]>
            <xml>
              <x:ExcelWorkbook>
                <x:ExcelWorksheets>
                  <x:ExcelWorksheet>
                    <x:Name>${worksheet}</x:Name>
                    <x:WorksheetOptions>
                      <x:DisplayGridlines/>
                    </x:WorksheetOptions>
                  </x:ExcelWorksheet>
                </x:ExcelWorksheets>
              </x:ExcelWorkbook>
            </xml>
            <![endif]-->
          </head>
          <body>
            <table>${tableData}</table>
          </body>
        </html>`

      const download = document.createElement('a')
      download.setAttribute('href', uri + this.utf8ToBase64(template))
      download.setAttribute('download', fileName)
      download.click()
    },
    utf8ToBase64(str) {
      return window.btoa(unescape(encodeURIComponent(str)))
    },
    downImage() {
      const content = this.myChart.getDataURL({ backgroundColor: '#fff' })
      const alink = document.createElement('a')

      alink.style.display = 'none'
      alink.download = this.leading + this.suffixName +'.png'
      alink.href = content

      document.body.appendChild(alink)
      alink.click()
      document.body.removeChild(alink)
    },
    changeName(it) {
      this.listData.forEach(v => {
        if (v.id === it.id) {
          v.name = it.name
        }
      })
    },
    changeName2(it) {
      this.listData.forEach(v => {
        if (v.id === it.id) {
          v.mark = it.mark
        }
      })
    },
    changeName3(it) {
      this.listData.forEach(v => {
        if (v.id === it.id) {
          v.finsh = it.finsh
        }
      })
    },
    checkDetail() {
      this.dialogVisible = true

      this.listData.forEach(v => {
        if (v.id === 1) {
          v.name = this.form.name1
          v.mark = this.form.orientation1
        } else if (v.id === 2) {
          v.name = this.form.name2
          v.mark = this.form.statistics1
        } else {
          v.name = this.form.name3
          v.mark = this.form.customer1
        }
      })

      this.detailForm.headName1 = this.leading
      this.detailForm.headName2 = this.markName
      this.detailForm.headName3 = this.finshName
      this.detailForm.headName4 = this.scoreName
      this.detailForm.headName5 = this.behaviorName
    },
    submitForm() {
      this.listData.forEach(v => {
        if (v.id === 1) {
          this.form.name1 = v.name
          this.form.orientation1 = v.mark
          this.form.orientation2 = v.finsh
          v.finsh = v.finsh
        } else if (v.id === 2) {
          this.form.name2 = v.name
          this.form.statistics1 = v.mark
          this.form.statistics2 = v.finsh
          v.finsh = v.finsh
        } else {
          this.form.name3 = v.name
          this.form.customer1 = v.mark
          this.form.customer2 = v.finsh
          v.finsh = v.finsh
        }
      })

      this.dialogVisible = false
      this.isImport = false
      this.detailForm.isEdit1 = false
      this.detailForm.isEdit2 = false
      this.detailForm.isEdit3 = false
      this.detailForm.isEdit4 = false
      this.detailForm.isEdit5 = false
      this.leading = this.detailForm.headName1
      this.markName = this.detailForm.headName2
      this.finshName = this.detailForm.headName3
      this.scoreName = this.detailForm.headName4
      this.behaviorName = this.detailForm.headName5

      localStorage.setItem('listJson', JSON.stringify(this.listData))
      localStorage.setItem('infoJson', JSON.stringify(this.detailForm))
      this.setDocummentTitle()

      this.$nextTick(() => {
        this.init()
      })
    },
    cancel() {
      // 导入没有确定，重新生成 listData
      if (this.isImport) this.initPage()

      this.dialogVisible = false
      this.isImport = false
    },
    init() {
      this.minComg = minCM([
        this.form.orientation1,
        this.form.customer1,
        this.form.statistics1,
      ])

      const list = [
        {
          name: this.form.name1,
          total: this.minComg,
          total2: this.form.orientation1,
          value: this.tranformLCM(
            this.form.orientation1,
            this.form.orientation2
          ),
          value2: this.form.orientation2,
        },
        {
          name: this.form.name2,
          total: this.minComg,
          total2: this.form.statistics1,
          value: this.tranformLCM(this.form.statistics1, this.form.statistics2),
          value2: this.form.statistics2,
        },
        {
          name: this.form.name3,
          total: this.minComg,
          total2: this.form.customer1,
          value: this.tranformLCM(this.form.customer1, this.form.customer2),
          value2: this.form.customer2,
        },
      ]

      this.initChart(list)
    },
    initChart(list = []) {
      const maxTotal = list[0].total

      this.myChart = echarts.init(document.getElementById('main'))

      const series = list.map((v, inx) => {
        return {
          type: 'bar',
          name: v.name,
          data: [v],
          barWidth: '28%',
          roundCap: true,
          showBackground: true,
          coordinateSystem: 'polar',
          backgroundStyle: {
            color: 'rgba(89, 113, 126, 0.2)',
          },
          itemStyle: {
            borderColor: this.borderColor[inx],
            opacity: 0.9,
            borderWidth: 2,
            color: (params) => this.setColor(params),
          },
        }
      })

      const option = {
        color: this.barColor,
        title: {
          text: this.leading + this.suffixName,
          top: 'top',
          right: '12px',
          textStyle: {
            fontSize: 28,
          },
        },
        angleAxis: {
          max: maxTotal,
          axisLine: { show: false },
          axisTick: { show: false },
          axisLabel: { show: false },
          splitLine: { show: false },
        },
        radiusAxis: {
          type: 'category',
          z: 10,
          // 极坐标情况下，series 为多数组，series.data 为单数组，该值不能赋值，否则渲染区域为该数组长度的几分之一
          // data: list.map(v => v.name),
          axisLine: {
            show: true,
            lineStyle: {
              color: '#000',
              width: 3,
            },
          },
          axisTick: { show: false },
          axisLabel: { show: false },
          splitLine: { show: false },
        },
        polar: {
          center: ['55%', '55%'],
          radius: ['11%', '88%'],
        },
        tooltip: {
          show: true,
          formatter: (pa) => {
            return `${pa.name}<br/>${this.markName}：${pa.data.total2}<br/>${this.finshName}：${pa.data.value2}<br/>`
          },
        },
        legend: {
          show: true,
          icon: 'circle',
          top: 0,
          left: 0,
          orient: 'vertical',
          itemWidth: 20,
          itemHeight: 20,
          data: list.map((v) => v.name),
        },
        series,
      }

      this.myChart.setOption(option)
    },
    setColor(params) {
      if (params.value > params.data.total) {
        if (params.seriesIndex === 0) {
          return new echarts.graphic.LinearGradient(1, 0, 0, 0, [
            {
              offset: 0,
              color: 'rgba(145,204,117,0.3)',
            },
            {
              offset: 1,
              color: '#91cc75',
            },
          ])
        } else if (params.seriesIndex === 1) {
          return new echarts.graphic.LinearGradient(1, 0, 0, 0, [
            {
              offset: 0,
              color: 'rgba(84,112,198,0.5)',
            },
            {
              offset: 1,
              color: '#5470c6',
            },
          ])
        } else {
          return new echarts.graphic.LinearGradient(1, 0, 0, 0, [
            {
              offset: 0,
              color: 'rgba(238,102,102,0.3)',
            },
            {
              offset: 1,
              color: '#ee6666',
            },
          ])
        }
      } else {
        return this.barColor[params.seriesIndex]
      }
    },
    tranformLCM(num1, num2) {
      this.maxComg = this.minComg / num1
      return num2 * this.maxComg
    },
    formatType(type) {
      if (['application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'].includes(type)) {
        return true
      } else {
        this.$message.error('只能上传 xlsx、xls 文件格式，请重新上传！')
        return false
      }
    },
    handleChange(file, fileList){
      if (this.formatType(file.raw.type)) {
        this.fileTemp = file.raw
        this.parseTable(this.fileTemp)
      }
    },
    handleRemove(file, fileList){
      this.fileTemp = null
    },
    handleExceed(files, fileList) {
      if (this.formatType(files[0].type)) {
        this.fileTemp = files[0]
        this.parseTable(this.fileTemp)
      }
    },
    // 导入合并数据，合并的数据列缺失
    parseTable(obj) {
      let reader = new FileReader()
      let binary = ''

      reader.onload = (e) => {
        const bytes = new Uint8Array(reader.result)
        const length = bytes.byteLength;
        
        for(let i = 0; i < length; i++) {
          binary += String.fromCharCode(bytes[i]);
        }
       
        // 读取完成的数据
        const workbook = XLSX.read(binary, { type: 'binary' });
        const sheet = workbook.Sheets[workbook.SheetNames]
        this.setTable(this.transformData(sheet))
      }
      
      reader.readAsArrayBuffer(obj);
    },
    getColInx(str) {
      const arr = str.split(':')
      const arr1 = arr.map(v => v.slice(0, 1))
      return arr1[1].charCodeAt() - arr1[0].charCodeAt() + 1
    },
    getRowInx(str) {
      const arr = str.split(':')
      const arr1 = arr.map(v => v.slice(1, 2))
      return arr1[1] - arr1[0] + 1
    },
    transformData(obj) {
      const list = []
      const deObj = {}
      const rowinx = this.getRowInx(obj['!ref'])
      const colinx = this.getColInx(obj['!ref'])

      for (let i=1; i<=colinx; i++) {
        const code = String.fromCharCode(64 + i) // 从 A 开始

        for (let j=1; j<=rowinx; j++) {
          const str = code + j
          const k = j - 2
          if (k >= 0) list[k] || (list[k] = {})

          if (obj[str]) {
            if (j === 1) { // 表头
              const na = 'headName' + i
              const na2 = 'isEdit' + i

              deObj[na2] = false
              deObj[na] = obj[str].v || deObj[dd]
            } else {
              switch (code) {
                case 'A':
                  list[k].name = obj[str].v
                  break;
                case 'B':
                  list[k].mark = obj[str].v
                  break;
                case 'C':
                  list[k].finsh = obj[str].v
                  break;
                case 'D':
                  list[k].score = obj[str].v
                break;
                case 'E':
                  list[k].behavior = obj[str].v
                break;
              }
            }
          }
        }
      }

      let id = 0
      list.forEach((v, inx) => {
        if (v.name) {
          id++
        } else {
          v.name = list[inx-1].name
          v.mark = list[inx-1].mark
          v.finsh = list[inx-1].finsh
        }

        v.id = id
      })

      return { list: list, deObj: deObj }
    },
    setTable({ list, deObj }) {
      let arr = []

      for (let i=0; i<list.length; i++) {
        const it = list[i]
        const len = Object.keys(it).length

        if (![3, 6].includes(len)) {
          this.$message.error(`第${i+1}行数据格式不对，重编辑后重新导入`)
          break
        }
      }

      this.initData(list, deObj)
    },
    initData(list, deObj) {
      this.detailForm = deObj
      this.listData = list
      this.isImport = true
    },
  },
}
