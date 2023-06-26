<template>
  <div class="home-main">
    <div class="top-main">
      <section v-if="0" class="top-wrapper">
        <el-form ref="form" :model="form" label-width="80px">
          <div class="item">
            <div class="item-title">{{ form.name1 }}</div>
            <el-form-item :label="markName + '：'">
              {{ form.orientation1 }}
            </el-form-item>
            <el-form-item :label="finshName + '：'">
              {{ form.orientation2 }}
            </el-form-item>
          </div>

          <div class="item">
            <div class="item-title">{{ form.name2 }}</div>
            <el-form-item :label="markName + '：'">
              {{ form.statistics1 }}
            </el-form-item>
            <el-form-item :label="finshName + '：'">
              {{ form.statistics2 }}
            </el-form-item>
          </div>

          <div class="item">
            <div class="item-title">{{ form.name3 }}</div>
            <el-form-item :label="markName + '：'">
              {{ form.customer1 }}
            </el-form-item>
            <el-form-item :label="finshName + '：'">
              {{ form.customer2 }}
            </el-form-item>
          </div>
        </el-form>

        <div>
          <!-- <el-button type="primary" size="medium" @click="init">生成图表</el-button> -->
          <!-- <el-button type="primary" size="medium" @click="downImage">下载图片</el-button> -->
          <el-button type="primary" size="medium" @click="checkDetail">查看明细</el-button>
        </div>
      </section>

      <div class="flex-box">
        <div id="main"></div>
      </div>
      <div class="flex-box-table">
        <el-table
          :data="listData"
          size="small"
          border
          :span-method="objectSpanMethod"
          :row-class-name="tableRowClassName"
        >
          <el-table-column>
            <template slot="header" slot-scope="scope">
              <el-input
                size="mini"
                v-if="detailForm.isEdit1"
                v-model="detailForm.headName1"
                placeholder=""
                @blur="editHandler(1, false)"
              />
              <template v-else>
                <div class="head-name">{{ detailForm.headName1 }}</div>
                <i class="el-icon-edit" @click="editHandler(1)"></i>
              </template>
            </template>
            <template slot-scope="scope">
              <el-input size="mini" v-model="scope.row.name" placeholder="" @blur="changeName(scope.row)"></el-input>
            </template>
          </el-table-column>
          <el-table-column width="120px">
            <template slot="header" slot-scope="scope">
              <el-input
                size="mini"
                v-if="detailForm.isEdit2"
                v-model="detailForm.headName2"
                placeholder=""
                @blur="editHandler(2, false)"
              />
              <template v-else>
                <div class="head-name">{{ detailForm.headName2 }}</div>
                <i class="el-icon-edit" @click="editHandler(2)"></i>
              </template>
            </template>
            <template slot-scope="scope">
              <el-input-number
                size="mini"
                v-model="scope.row.mark"
                :controls="false"
                :min="0"
                @blur="changeName2(scope.row)"
              ></el-input-number>
            </template>
          </el-table-column>
          <el-table-column width="120px">
            <template slot="header" slot-scope="scope">
              <el-input
                size="mini"
                v-if="detailForm.isEdit3"
                v-model="detailForm.headName3"
                placeholder=""
                @blur="editHandler(3, false)"
              />
              <template v-else>
                <div class="head-name">{{ detailForm.headName3 }}</div>
                <i class="el-icon-edit" @click="editHandler(3)"></i>
              </template>
            </template>
            <template slot-scope="scope">
              <el-input-number size="mini" v-model="scope.row.finsh" :controls="false" :min="0"></el-input-number>
            </template>
          </el-table-column>
          <el-table-column width="120px">
            <template slot="header" slot-scope="scope">
              <el-input
                size="mini"
                v-if="detailForm.isEdit4"
                v-model="detailForm.headName4"
                placeholder=""
                @blur="editHandler(4, false)"
              />
              <template v-else>
                <div class="head-name">{{ detailForm.headName4 }}</div>
                <i class="el-icon-edit" @click="editHandler(4)"></i>
              </template>
            </template>
            <template slot-scope="scope">
              <el-input-number size="mini" v-model="scope.row.score" :controls="false" :min="0"></el-input-number>
            </template>
          </el-table-column>
        </el-table>

        <div style="text-align: center">
          <el-button size="mini" @click="cancel">取消</el-button>
          <el-button size="mini" type="primary" @click="submitForm">确定</el-button>
          <el-button size="mini" type="primary" @click="downExcel">导出Excel</el-button>
        </div>
      </div>

      <el-button v-if="0" type="primary" size="medium" :class="isMobile ? '' : 'fixed-btn'" @click="checkDetail"
        >查看明细</el-button
      >
    </div>

    <el-dialog
      class="table-dialog-box"
      width="1100px"
      :title="dialogTitle"
      :before-close="cancel"
      :visible.sync="dialogVisible"
    >
      <el-table :data="listData" border :span-method="objectSpanMethod" :row-class-name="tableRowClassName">
        <el-table-column width="250">
          <template slot="header" slot-scope="scope">
            <el-input
              v-if="detailForm.isEdit1"
              v-model="detailForm.headName1"
              placeholder=""
              @blur="editHandler(1, false)"
            />
            <template v-else>
              <div class="head-name">{{ detailForm.headName1 }}</div>
              <i class="el-icon-edit" @click="editHandler(1)"></i>
            </template>
          </template>
          <template slot-scope="scope">
            <el-input v-model="scope.row.name" placeholder="" @blur="changeName(scope.row)"></el-input>
          </template>
        </el-table-column>
        <el-table-column width="111">
          <template slot="header" slot-scope="scope">
            <el-input
              v-if="detailForm.isEdit2"
              v-model="detailForm.headName2"
              placeholder=""
              @blur="editHandler(2, false)"
            />
            <template v-else>
              <div class="head-name">{{ detailForm.headName2 }}</div>
              <i class="el-icon-edit" @click="editHandler(2)"></i>
            </template>
          </template>
          <template slot-scope="scope">
            <el-input-number
              v-model="scope.row.mark"
              :controls="false"
              :min="0"
              @blur="changeName2(scope.row)"
            ></el-input-number>
          </template>
        </el-table-column>
        <el-table-column width="111" align="center">
          <template slot="header" slot-scope="scope">
            <el-input
              v-if="detailForm.isEdit3"
              v-model="detailForm.headName3"
              placeholder=""
              @blur="editHandler(3, false)"
            />
            <template v-else>
              <div class="head-name">{{ detailForm.headName3 }}</div>
              <i class="el-icon-edit" @click="editHandler(3)"></i>
            </template>
          </template>
          <template slot-scope="scope">
            {{ getFinshNum(scope.row.id) }}
          </template>
        </el-table-column>
        <el-table-column width="111">
          <template slot="header" slot-scope="scope">
            <el-input
              v-if="detailForm.isEdit4"
              v-model="detailForm.headName4"
              placeholder=""
              @blur="editHandler(4, false)"
            />
            <template v-else>
              <div class="head-name">{{ detailForm.headName4 }}</div>
              <i class="el-icon-edit" @click="editHandler(4)"></i>
            </template>
          </template>
          <template slot-scope="scope">
            <el-input-number v-model="scope.row.score" :controls="false" :min="0"></el-input-number>
          </template>
        </el-table-column>
        <el-table-column>
          <template slot="header" slot-scope="scope">
            <el-input
              v-if="detailForm.isEdit5"
              v-model="detailForm.headName5"
              placeholder=""
              @blur="editHandler(5, false)"
            />
            <template v-else>
              <div class="head-name">{{ detailForm.headName5 }}</div>
              <i class="el-icon-edit" @click="editHandler(5)"></i>
            </template>
          </template>
          <template slot-scope="scope">
            <div class="cell-behavior">
              <el-input
                type="textarea"
                :autosize="{ minRows: 1, maxRows: 3 }"
                placeholder=""
                v-model="scope.row.behavior"
              >
              </el-input>
              <i v-if="shoIcon(scope.row.id)" class="el-icon-close" @click="delRow(scope.$index)"></i>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="60" align="center">
          <template slot-scope="scope">
            <span class="new-beha" @click="newRow(scope.row, scope.$index)">新增</span>
          </template>
        </el-table-column>
      </el-table>

      <div slot="footer" class="dialog-footer">
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
          <el-button size="mini" type="primary">导入Excel</el-button>
          <div v-if="0" slot="tip" class="el-upload__tip">只 能 上 传 xlsx / xls 文 件</div>
        </el-upload> -->
      </div>
    </el-dialog>
  </div>
</template>

<script src="./home.js"></script>
<style lang="less" src="./home.less"></style>
