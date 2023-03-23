<template>
  <div class="home-main">
    <div class="top-main">
      <section v-if="0" class="top-wrapper">
        <el-form ref="form" :model="pform" label-width="80px">
          <div class="item">
            <div class="item-title">{{ pform.name1 }}</div>
            <el-form-item :label='markName + "："'>
              {{ pform.orientation1 }}
            </el-form-item>
            <el-form-item :label="finshName + '：'">
              {{ pform.orientation2 }}
            </el-form-item>
          </div>

          <div class="item">
            <div class="item-title">{{ pform.name2 }}</div>
            <el-form-item :label='markName + "："'>
              {{ pform.statistics1 }}
            </el-form-item>
            <el-form-item :label="finshName + '：'">
              {{ pform.statistics2 }}
            </el-form-item>
          </div>

          <div class="item">
            <div class="item-title">{{ pform.name3 }}</div>
            <el-form-item :label='markName + "："'>
              {{ pform.customer1 }}
            </el-form-item>
            <el-form-item :label="finshName + '：'">
              {{ pform.customer2 }}
            </el-form-item>
          </div>
        </el-form>

        <div>
          <!-- <el-button type="primary" @click="init">生成图表</el-button> -->
          <!-- <el-button type="primary" @click="downImage">下载图片</el-button> -->
          <el-button type="primary" @click="checkDetail">查看明细</el-button>
        </div>
      </section>

      <div><div id="main"></div></div>
      <el-button
        type="primary"
        :class="isMobile ? '' : 'fixed-btn'"
        @click="checkDetail">查看明细</el-button>
    </div>

    <el-dialog
      v-model="dialogVisible"
      title="明细列表"
      width="1100px"
      class="table-dialog-box"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      :before-close="cancel"
    >
      <el-table :data="listData.list" border :span-method="objectSpanMethod" :row-class-name="tableRowClassName">
        <el-table-column width="250">
          <template #header>
            <el-input v-if="detailForm.isEdit1" v-model="detailForm.headName1" placeholder="" @blur="editHandler(1, false)" />
            <template v-else>
              <div class="head-name">{{ detailForm.headName1 }}</div>
              <el-icon @click="editHandler(1)"><EditPen /></el-icon>
            </template>
          </template>
          <template #default="scope">
            <el-input v-model="scope.row.name" placeholder="" @blur="changeName(scope.row)"></el-input>
          </template>
        </el-table-column>
        <el-table-column width="111">
          <template #header>
            <el-input v-if="detailForm.isEdit2" v-model="detailForm.headName2" placeholder="" @blur="editHandler(2, false)" />
            <template v-else>
              <div class="head-name">{{ detailForm.headName2 }}</div>
              <el-icon @click="editHandler(2)"><EditPen /></el-icon>
            </template>
          </template>
          <template #default="scope">
            <el-input-number
              v-model="scope.row.mark"
              :controls="false"
              :min="0"
               @blur="changeName2(scope.row)"
            ></el-input-number>
          </template>
        </el-table-column>
        <el-table-column width="111" align="center">
          <template #header>
            <el-input v-if="detailForm.isEdit3" v-model="detailForm.headName3" placeholder="" @blur="editHandler(3, false)" />
            <template v-else>
              <div class="head-name">{{ detailForm.headName3 }}</div>
              <el-icon @click="editHandler(3)"><EditPen /></el-icon>
            </template>
          </template>
          <template #default="scope">
            {{ getFinshNum(scope.row.id) }}
          </template>
        </el-table-column>
        <el-table-column width="111">
          <template #header>
            <el-input v-if="detailForm.isEdit4" v-model="detailForm.headName4" placeholder="" @blur="editHandler(4, false)" />
            <template v-else>
              <div class="head-name">{{ detailForm.headName4 }}</div>
              <el-icon @click="editHandler(4)"><EditPen /></el-icon>
            </template>
          </template>
          <template #default="scope">
            <el-input-number
              v-model="scope.row.score"
              :controls="false"
              :min="0"
            ></el-input-number>
          </template>
        </el-table-column>
        <el-table-column>
          <template #header>
            <el-input v-if="detailForm.isEdit5" v-model="detailForm.headName5" placeholder="" @blur="editHandler(5, false)" />
            <template v-else>
              <div class="head-name">{{ detailForm.headName5 }}</div>
              <el-icon @click="editHandler(5)"><EditPen /></el-icon>
            </template>
          </template>
          <template #default="scope">
            <div class="cell-behavior">
              <el-input
                type="textarea"
                :autosize="{ minRows: 1, maxRows: 3}"
                placeholder=""
                v-model="scope.row.behavior">
              </el-input>
              <el-icon v-if="shoIcon(scope.row.id)" @click="delRow(scope.$index)"><Close /></el-icon>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="60" align="center">
          <template #default="scope">
            <span class="new-beha" @click="newRow(scope.row, scope.$index)">新增</span>
          </template>
        </el-table-column>
      </el-table>

      <template #footer>
        <div class="dialog-footer">
          <el-button size="medium" @click="cancel">取消</el-button>
          <el-button size="medium" type="primary" @click="submitForm">确定</el-button>
          <el-button size="medium" type="primary" @click="downExcel">导出Excel</el-button>
          <!-- <el-upload
            class="upload-demo"
            action=""
            :on-change="handleChange"
            :on-exceed="handleExceed"
            :on-remove="handleRemove"
            :limit="1"
            :auto-upload="false"
            :show-file-list="false"
            accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel"
            >
            <el-button size="small" type="primary">导入Excel</el-button>
            <div v-if="0" slot="tip" class="el-upload__tip">只 能 上 传 xlsx / xls 文 件</div>
          </el-upload> -->
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
  import * as XLSX from 'xlsx'
  import { minCM } from '@/utils/math'
  import { typeList, itemOpts, formOpts } from '@/types/type'
  import * as ECharts from 'echarts';

  let myChart: any = null
  let leading = '领先指标'
  let suffixName = '进度图'

  let fileTemp = ref(null)
  let isImport = ref(false)
  let isMobile = ref(false)
  let dialogVisible = ref(false)
  let minComg = ref(1)
  let maxComg = ref(1)
  let markName = ref('目标')
  let finshName = ref('已完成')
  let scoreName = ref('得分')
  let behaviorName = ref('行为')

  let listData: typeList = reactive({ list: [] })
  let borderColor = reactive(['green', 'blue', 'red'])
  let barColor = reactive(['#91cc75', '#5470c6', '#ee6666'])
  let detailForm:any = reactive({
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
  })
  const pform = reactive({
    name1: '当月已完成目标',
    name2: '提供统计数据、分析统计分析',
    name3: '见面客户及其信任方',
    orientation1: 1,
    orientation2: 1,
    statistics1: 1,
    statistics2: 1,
    customer1: 1,
    customer2: 1,
  })

  function handleChange(file: any, fileList: File[]){
    if (formatType(file.raw.type)) {
      fileTemp.value = file.raw
      parseTable(fileTemp.value)
    }
  }

  function handleRemove(file: File, fileList: File[]){
    fileTemp.value = null
  }

  function handleExceed(files: File[], fileList: File[]) {
    if (formatType(files[0].type)) {
      fileTemp.value = files[0] as any
      parseTable(fileTemp.value)
    }
  }

  function formatType(type:string) {
    if (['application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'].includes(type)) {
      return true
    } else {
      ElMessage({
        message: '只能上传 xlsx、xls 文件格式，请重新上传！',
        type: 'success',
      })
      return false
    }
  }

  // 导入合并数据，合并的数据列缺失
  function parseTable(obj: any) {
    let reader: any = new FileReader()
    let binary = ''

    reader.onload = (e:any) => {
      const bytes = new Uint8Array(reader.result)
      const length = bytes.byteLength;
      
      for(let i = 0; i < length; i++) {
        binary += String.fromCharCode(bytes[i]);
      }
      
      // 读取完成的数据
      const workbook: any = XLSX.read(binary, { type: 'binary' });
      const sheet = workbook.Sheets[workbook.SheetNames]
      setTable(transformData(sheet))
    }
    
    reader.readAsArrayBuffer(obj);
  }

  function transformData(obj: any) {
    const list: any = []
    const deObj: any = {}
    const rowinx = getRowInx(obj['!ref'])
    const colinx = getColInx(obj['!ref'])

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
            deObj[na] = obj[str].v || leading
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
    list.forEach((v:itemOpts, inx:number) => {
      if (v.name) {
        id++
      } else {
        v.name = list[inx-1].name
        v.mark = list[inx-1].mark
        v.finsh = list[inx-1].finsh
      }

      v.id = id
    })

    return { list, deObj }
  }

  function getColInx(str:string) {
    const arr = str.split(':')
    return arr[1].charCodeAt(0) - arr[0].charCodeAt(0) + 1
  }

  function getRowInx(str:string) {
    const arr: string[] = str.split(':')
    const arr1 = arr.map(v => parseFloat(v.slice(1, 2)))
    return arr1[1] - arr1[0] + 1
  }

  function setTable({ list, deObj }: { list:itemOpts[], deObj: formOpts }) {
    for (let i=0; i<list.length; i++) {
      const it = list[i]
      const len = Object.keys(it).length

      if (![3, 6].includes(len)) {
        ElNotification({
          message: `第${i+1}行数据格式不对，重编辑后重新导入`,
          title: 'Warning',
          type: 'warning',
          duration: 6000,
        })
        break
      }
    }

    initData(list, deObj)
  }

  function initData(list:itemOpts[], deObj: formOpts) {
    detailForm = deObj
    listData.list = list
    isImport.value = true
  }

  function checkDetail() {
    dialogVisible.value = true

    listData.list.forEach(v => {
      if (v.id === 1) {
        v.name = pform.name1
        v.mark = pform.orientation1
      } else if (v.id === 2) {
        v.name = pform.name2
        v.mark = pform.statistics1
      } else {
        v.name = pform.name3
        v.mark = pform.customer1
      }
    })

    detailForm.headName1 = leading
    detailForm.headName2 = markName.value
    detailForm.headName3 = finshName.value
    detailForm.headName4 = scoreName.value
    detailForm.headName5 = behaviorName.value
  }

  function downImage() {
    const content = myChart.getDataURL({ backgroundColor: '#fff' })
    const alink = document.createElement('a')

    alink.style.display = 'none'
    alink.download = leading + suffixName +'.png'
    alink.href = content

    document.body.appendChild(alink)
    alink.click()
    document.body.removeChild(alink)
  }

  function initPage() {
    const list = JSON.parse(localStorage.getItem('listJson') || '[]')
    const infoObj = JSON.parse(localStorage.getItem('infoJson') || '{}')

    detailForm.headName1 = leading
    detailForm.headName2 = markName.value
    detailForm.headName3 = finshName.value
    detailForm.headName4 = scoreName.value
    detailForm.headName5 = behaviorName.value

    if (list.length >= 3) {
      listData.list = list
      detailForm = {
        ...detailForm,
        ...infoObj
      }

      leading = infoObj.headName1
      markName.value = infoObj.headName2
      finshName.value = infoObj.headName3
      scoreName.value = infoObj.headName4
      behaviorName.value = infoObj.headName5

      const list1 = listData.list.filter(v => v.id === 1)
      const list2 = listData.list.filter(v => v.id === 2)
      const list3 = listData.list.filter(v => v.id === 3)

      pform.name1 = list1[0].name
      pform.name2 = list2[0].name
      pform.name3 = list3[0].name

      pform.orientation1 = list1[0].mark || 0
      pform.orientation2 = list1[0].finsh || 0
      pform.statistics1 = list2[0].mark || 0
      pform.statistics2 = list2[0].finsh || 0
      pform.customer1 = list3[0].mark || 0
      pform.customer2 = list3[0].finsh || 0
    } else {
      listData.list = [
        {
          id: 1,
          name: pform.name1,
          mark: 1,
          finsh: 1,
          score: 1,
          behavior: '',
        },
        {
          id: 2,
          name: pform.name2,
          mark: 1,
          finsh: 1,
          score: 1,
          behavior: '',
        },
        {
          id: 3,
          name: pform.name3,
          mark: 1,
          finsh: 1,
          score: 1,
          behavior: '',
        },
      ]
    }

    setDocummentTitle()
  }

  function setDocummentTitle() {
    document.title = leading + suffixName
  }

  function init() {
    minComg.value = minCM([
      pform.orientation1,
      pform.customer1,
      pform.statistics1,
    ])

    const list: itemOpts[] = [
      {
        name: pform.name1,
        total: minComg.value,
        total2: pform.orientation1,
        value: tranformLCM(
          pform.orientation1,
          pform.orientation2
        ),
        value2: pform.orientation2,
      },
      {
        name: pform.name2,
        total: minComg.value,
        total2: pform.statistics1,
        value: tranformLCM(pform.statistics1, pform.statistics2),
        value2: pform.statistics2,
      },
      {
        name: pform.name3,
        total: minComg.value,
        total2: pform.customer1,
        value: tranformLCM(pform.customer1, pform.customer2),
        value2: pform.customer2,
      },
    ]

    initChart(list)
  }
  
  function tranformLCM(num1: number, num2: number): number {
    maxComg.value = minComg.value / num1
    return num2 * maxComg.value
  }

  function initChart(list:itemOpts[] = []) {
    const maxTotal = list[0].total
    myChart = ECharts.init(document.getElementById('main') as HTMLHtmlElement)

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
          borderColor: borderColor[inx],
          opacity: 0.9,
          borderWidth: 2,
          color: (params:any) => setColor(params),
        },
      }
    })

    const option = {
      color: barColor,
      title: {
        text: leading + suffixName,
        top: 'top',
        left: 'right',
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
        formatter: (pa:any) => {
          return `${pa.name}<br/>${markName.value}：${pa.data.total2}<br/>${finshName.value}：${pa.data.value2}<br/>`
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

    myChart.setOption(option)
  }

  function setColor(params:any) {
    if (params.value > params.data.total) {
      if (params.seriesIndex === 0) {
        return new ECharts.graphic.LinearGradient(1, 0, 0, 0, [
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
        return new ECharts.graphic.LinearGradient(1, 0, 0, 0, [
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
        return new ECharts.graphic.LinearGradient(1, 0, 0, 0, [
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
      return barColor[params.seriesIndex]
    }
  }

  function cancel() {
    // 导入没有确定，重新生成 listData
    if (isImport.value) initPage()

    dialogVisible.value = false
    isImport.value = false
  }

  function downExcel() {
    const arr = [detailForm.headName1 || leading, detailForm.headName2 || markName.value, detailForm.headName3 || finshName.value, detailForm.headName4 || scoreName.value, detailForm.headName5 || behaviorName.value]
    downXLSX2(listData.list, leading+suffixName, arr)
  }

  function downXLSX2(list:itemOpts[], fileName:string, columns:string[]) {
    // 列标题
    let tableData = '<tr>'
    columns.forEach(v => {
      tableData += `<td>${v}</td>`
    })
    tableData += '</tr>'

    // 循环遍历，每行加入tr标签，每个单元格加td标签
    list.forEach((v:any, inx) => {
      tableData += '<tr>'
      for (let it in v) {
        if (it !== 'id') {
          if (['name', 'mark', 'finsh', ].includes(it)) {
            if (v.id === 1) {
              if (inx === 0) {
                const len = listData.list.filter(ob => ob.id === 1).length
                tableData += `<td width=${setWidth(it)}  height="66" rowspan=${len}>${ v[it] + '\t'}</td>`
              }
            } else if (v.id === 2) {
              let index = listData.list.map(o=>o.id).indexOf(2)
              
              if (inx === index) {
                const len = listData.list.filter(ob => ob.id === 2).length
                tableData += `<td width=${setWidth(it)}  height="66" rowspan=${len}>${ v[it] + '\t'}</td>`
              }
            } else {
              let index = listData.list.map(o=>o.id).indexOf(3)

              if (inx === index) {
                const len = listData.list.filter(ob => ob.id === 3).length
                tableData += `<td width=${setWidth(it)}  height="66" rowspan=${len}>${ v[it] + '\t'}</td>`
              }
            }
          } else {
            // 增加 \t 为了不让表格显示科学计数法或者其他格式
            tableData += `<td width=${setWidth(it)} height="66">${ v[it] + '\t'}</td>`
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
    download.setAttribute('href', uri + utf8ToBase64(template))
    download.setAttribute('download', fileName)
    download.click()
  }

  function setWidth(label:string) {
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
  }

  function utf8ToBase64(str:string) {
    return window.btoa(unescape(encodeURIComponent(str)))
  }

  function getFinshNum(id:number) {
    const list = listData.list.filter(v => v.id === id)
    const num = list.reduce((t, c:any) => {
      t += c.score
      return t
    }, 0)

    return num
  }

  async function submitForm() {
    listData.list.forEach((v:any) => {
      if (v.id === 1) {
        const nn = getFinshNum(v.id)

        pform.name1 = v.name
        pform.orientation1 = v.mark || 0
        pform.orientation2 = nn || 0
        v.finsh = nn
      } else if (v.id === 2) {
        const nn = getFinshNum(v.id)

        pform.name2 = v.name
        pform.statistics1 = v.mark || 0
        pform.statistics2 = nn || 0
        v.finsh = nn
      } else {
        const nn = getFinshNum(v.id)

        pform.name3 = v.name
        pform.customer1 = v.mark || 0
        pform.customer2 = nn || 0
        v.finsh = nn
      }
    })

    dialogVisible.value = false
    isImport.value = false
    detailForm.isEdit1 = false
    detailForm.isEdit2 = false
    detailForm.isEdit3 = false
    detailForm.isEdit4 = false
    detailForm.isEdit5 = false
    leading = detailForm.headName1
    markName.value = detailForm.headName2
    finshName.value = detailForm.headName3
    scoreName.value = detailForm.headName4
    behaviorName.value = detailForm.headName5

    localStorage.setItem('listJson', JSON.stringify(listData.list))
    localStorage.setItem('infoJson', JSON.stringify(detailForm))
    setDocummentTitle()

    await nextTick()
    init()
  }

  function editHandler(num:number, flag=true) {
    const name = `isEdit${num}`
    detailForm[name] = flag
  }
  
  function newRow(obj:itemOpts, inx:number) {
    const len = listData.list.filter(v => v.id === obj.id).length

    listData.list.splice(len+inx, 0, {
      id: obj.id,
      name: obj.name,
      mark: obj.mark,
      finsh: obj.finsh,
      score: 0,
      behavior: '',
    })
  }

  function tableRowClassName({row, rowIndex}:any) {
    if (row.id !== 2) {
      return 'warning-row';
    }
    return ''
  }

  function delRow(inx:number) {
    listData.list.splice(inx, 1)
  }

  function changeName(it:itemOpts) {
    listData.list.forEach(v => {
      if (v.id === it.id) {
        v.name = it.name
      }
    })
  }

  function changeName2(it:itemOpts) {
    listData.list.forEach(v => {
      if (v.id === it.id) {
        v.mark = it.mark
      }
    })
  }

  function changeName3(it:itemOpts) {
    listData.list.forEach(v => {
      if (v.id === it.id) {
        v.finsh = it.finsh
      }
    })
  }

  initPage()

  onMounted(() => {
    document.addEventListener('DOMContentLoaded', async () => {
      const width = document.body.clientWidth
      const dom = document.querySelector('#main') as HTMLElement

      if (width < 900) {
        isMobile.value = true
        dom.style.width = width - 30 + 'px'
        dom.style.height = width * 1.3 - 30 + 'px'
        dom.style.padding = '20px 10px'
      } else {
        const wid = document.body.clientWidth
        const hei = document.body.clientHeight
        let cal = Math.min(wid, hei) - 123
        if (cal > 1000) cal = 1000

        dom.style.width = cal + 'px'
        dom.style.height = cal + 'px'
      }

      await nextTick()
      init()
    }, false)
  })

  const shoIcon = computed(() => (id:number) => {
    const len = listData.list.filter(v => v.id === id).length
    if (len > 1) return true
    return false
  })

  const objectSpanMethod = computed(() => ({ row, column, rowIndex, columnIndex }:any) => {
    if ([0, 1, 2, 5].includes(columnIndex)) {
      if (row.id === 1) {
        const len = listData.list.filter(v => v.id === 1).length

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
        let inx = listData.list.map(o=>o.id).indexOf(2)
        const len = listData.list.filter(v => v.id === 2).length

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
        let inx = listData.list.map(o=>o.id).indexOf(3)
        const len = listData.list.filter(v => v.id === 3).length

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
  })
</script>

<style lang="less" src='./home.less' scoped></style>
