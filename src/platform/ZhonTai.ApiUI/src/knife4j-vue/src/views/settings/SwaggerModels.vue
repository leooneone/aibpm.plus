<template>
  <a-layout-content :class="['knife4j-body-content', copyright?'':'knife4j-body-content--no-fotter']">
    <div class="swaggermododel">
      <a-collapse @change="modelChange">
        <a-collapse-panel
          v-for="model in modelNames"
          :header="model.name"
          :key="model.id"
          :class="model.modelClass()"
        >
          <a-table
            v-if="model.load"
            :defaultExpandAllRows="expanRows"
            :columns="columns"
            :dataSource="model.data"
            :rowKey="unionKey"
            size="middle"
            :pagination="page"
          >
          <template slot="descriptionValueTemplate" slot-scope="text">
            <span v-html="text"></span>
          </template>
          </a-table>
        </a-collapse-panel>
      </a-collapse>
    </div>
  </a-layout-content>
</template>
<script>
import KUtils from "@/core/utils";
import Constants from "@/store/constants";

export default {
  props: {
    data: {
      type: Object
    }
  },
  computed:{
    language(){
       return this.$store.state.globals.language;
    }, 
    swagger(){
       return this.$store.state.globals.swagger;
    },
    copyright() {
      const servers = this.$store.state.globals.swaggerCurrentInstance
        ?.swaggerData?.servers
      if (servers && servers.length > 0) {
        return this.$store.state.globals.swaggerCurrentInstance.swaggerData
          .servers[0].extensions?.copyright
      } else {
        return ''
      }
    }
  },
  watch:{
    language:function(val,oldval){
      this.initI18n();
    }
  },
  created() {
    this.initI18n();
    this.initModelNames();
  },
  data() {
    return {
      columns: [],
      expanRows: true,
      page: false,
      modelNames: []
    };
  },
  methods: {
    getCurrentI18nInstance(){
      return this.$i18n.messages[this.language];
    },
    initI18n(){
      this.columns=this.getCurrentI18nInstance().table.swaggerModelsColumns;
    },
    unionKey() {
      return KUtils.randomMd5();
    },
    initModelNames() {
      var key = Constants.globalTreeTableModelParams + this.data.instance.id;
      //??????instance??????????????????model??????
      var treeTableModel = this.data.instance.swaggerTreeTableModels;
      this.$Knife4jModels.setValue(key, treeTableModel);
      if (KUtils.checkUndefined(treeTableModel)) {
        for (var name in treeTableModel) {
          var random = parseInt(Math.random() * (6 - 1 + 1) + 1, 10);
          var modelInfo = {
            //id: KUtils.randomMd5Str(name),
            id: name,
            name: name,
            //???????????????
            load: false,
            data: [],
            random: random
          };
          modelInfo.modelClass = function() {
            var cname = "panel-default";
            switch (this.random) {
              case 1:
                cname = "panel-success";
                break;
              case 2:
                cname = "panel-success";
                break;
              case 3:
                cname = "panel-info";
                break;
              case 4:
                cname = "panel-warning";
                break;
              case 5:
                cname = "panel-danger";
                break;
              case 6:
                cname = "panel-default";
                break;
            }
            return cname;
          };
          this.modelNames.push(modelInfo);
        }
      }
      //console.log(this.modelNames)
   },
    modelChange(key) {
      var that = this;
      //console("??????????????????key:" + that.activeKey);

      var instanceKey =
        Constants.globalTreeTableModelParams + this.data.instance.id;
      //console("chang??????-------");
      //console(key);

      if (KUtils.arrNotEmpty(key)) {
        //????????????????????????
        var lastIndex = key.length - 1;
        var id = key[lastIndex];
        //console("key------------");
        this.modelNames.forEach(function(model) {
          if (model.id == id) {
            //console("???????????????model???===");
            //?????????model,?????????????????????
            if (!model.load) {
              //?????????????????????,??????????????????
              ////console("????????????");
              ////console(model);
              var modelData = [];
              //????????????model???????????????
              //??????????????????????????????,pid?????????-1
              //var originalModel = treeTableModel[model.name];
              var originalModel = that.$Knife4jModels.getByModelName(
                instanceKey,
                model.name
              );
              originalModel=that.swagger.analysisDefinitionRefTableModel(that.data.instance.id,originalModel);
              //console.log("???????????????")
              //console.log(originalModel);
              //console("????????????model:" + model.name);
              if (KUtils.checkUndefined(originalModel)) {
                //??????
                //??????????????????
                if (KUtils.arrNotEmpty(originalModel.params)) {
                  originalModel.params.forEach(function(nmd) {
                    //??????????????????pid=-1
                    var childrenParam = {
                      children: nmd.children,
                      childrenTypes: nmd.childrenTypes,
                      def: nmd.def,
                      description: nmd.description,
                      enum: nmd.enum,
                      example: nmd.example,
                      id: nmd.id,
                      ignoreFilterName: nmd.ignoreFilterName,
                      in: nmd.in,
                      level: nmd.level,
                      name: nmd.name,
                      parentTypes: nmd.parentTypes,
                      pid: "-1",
                      readOnly: nmd.readOnly,
                      require: nmd.require,
                      schema: nmd.schema,
                      schemaValue: nmd.schemaValue,
                      show: nmd.show,
                      txtValue: nmd.txtValue,
                      type: nmd.type,
                      validateInstance: nmd.validateInstance,
                      validateStatus: nmd.validateStatus,
                      value: nmd.value
                    };
                    modelData.push(childrenParam);
                    //??????????????????schema
                  });
                }
              }
              ////console(modelData);
              model.data = modelData;
              model.load = true;
            }
          }
        });
      }
      //???????????????
      that.expanRows = true;
    },
    deepFindChildren(modelData) {
      var that = this;
      var paramDatas = [];
      if (KUtils.arrNotEmpty(modelData)) {
        //?????????????????????????????????
        modelData.forEach(function(md) {
          var newmd = {
            childrenTypes: md.childrenTypes,
            def: md.def,
            description: md.description,
            enum: md.enum,
            example: md.example,
            id: md.id,
            ignoreFilterName: md.ignoreFilterName,
            in: md.in,
            level: md.level,
            name: md.name,
            parentTypes: md.parentTypes,
            pid: md.pid,
            readOnly: md.readOnly,
            require: md.require,
            schema: md.schema,
            schemaValue: md.schemaValue,
            show: md.show,
            txtValue: md.txtValue,
            type: md.type,
            validateInstance: md.validateInstance,
            validateStatus: md.validateStatus,
            value: md.value
          };
          if (newmd.pid == "-1") {
            newmd.children = [];
            newmd.childrenIds = [];
            that.findModelChildren(newmd, modelData);
            //?????????????????????,??????children??????
            if (newmd.children.length == 0) {
              newmd.children = null;
            }
            // modelA.data.push(md)
            paramDatas.push(newmd);
          }
        });
      }
      return paramDatas;
    },
    findModelChildren(md, modelData) {
      var that = this;
      if (KUtils.arrNotEmpty(modelData)) {
        modelData.forEach(function(nmd) {
          var newnmd = {
            childrenTypes: nmd.childrenTypes,
            def: nmd.def,
            description: nmd.description,
            enum: nmd.enum,
            example: nmd.example,
            id: nmd.id,
            ignoreFilterName: nmd.ignoreFilterName,
            in: nmd.in,
            level: nmd.level,
            name: nmd.name,
            parentTypes: nmd.parentTypes,
            pid: nmd.pid,
            readOnly: nmd.readOnly,
            require: nmd.require,
            schema: nmd.schema,
            schemaValue: nmd.schemaValue,
            show: nmd.show,
            txtValue: nmd.txtValue,
            type: nmd.type,
            validateInstance: nmd.validateInstance,
            validateStatus: nmd.validateStatus,
            value: nmd.value
          };
          if (newnmd.pid == md.id) {
            newnmd.children = [];
            newnmd.childrenIds = [];
            that.findModelChildren(newnmd, modelData);
            //?????????????????????,??????children??????
            if (newnmd.children.length == 0) {
              newnmd.children = null;
            }
            //??????????????????
            if (md.childrenIds.indexOf(newnmd.id) == -1) {
              //?????????
              md.childrenIds.push(newnmd.id);
              md.children.push(newnmd);
            }
          }
        });
      }
    },
    deepTreeTableSchemaModel(modelData, treeTableModel, param, rootParam) {
      var that = this;
      ////console(model.name)
      if (KUtils.checkUndefined(param.schemaValue)) {
        var schema = treeTableModel[param.schemaValue];
        if (KUtils.checkUndefined(schema)) {
          rootParam.parentTypes.push(param.schemaValue);
          if (KUtils.arrNotEmpty(schema.params)) {
            schema.params.forEach(function(nmd) {
              //childrenparam???????????????????????????
              var childrenParam = {
                childrenTypes: nmd.childrenTypes,
                def: nmd.def,
                description: nmd.description,
                enum: nmd.enum,
                example: nmd.example,
                id: nmd.id,
                ignoreFilterName: nmd.ignoreFilterName,
                in: nmd.in,
                level: nmd.level,
                name: nmd.name,
                parentTypes: nmd.parentTypes,
                pid: nmd.pid,
                readOnly: nmd.readOnly,
                require: nmd.require,
                schema: nmd.schema,
                schemaValue: nmd.schemaValue,
                show: nmd.show,
                txtValue: nmd.txtValue,
                type: nmd.type,
                validateInstance: nmd.validateInstance,
                validateStatus: nmd.validateStatus,
                value: nmd.value
              };
              childrenParam.pid = param.id;
              modelData.push(childrenParam);
              if (childrenParam.schema) {
                //??????schema,?????????????????????
                if (
                  rootParam.parentTypes.indexOf(childrenParam.schemaValue) == -1
                ) {
                  that.deepTreeTableSchemaModel(
                    modelData,
                    treeTableModel,
                    childrenParam,
                    rootParam
                  );
                }
              }
            });
          }
        }
      }
    }
  }
};
</script>
<style lang="less" scoped>
@ColHeaderSize: 16px;
@ColTopHeight: 3px;

.swaggermododel {
  width: 98%;
  margin: 20px auto;
}
.ant-collapse {
  .panel-info {
    font-size: @ColHeaderSize;
    background: #bce8f1;
    margin-top: @ColTopHeight;
  }
  .panel-default {
    font-size: @ColHeaderSize;
    background: #ddd;
    margin-top: @ColTopHeight;
  }
  .panel-danger {
    font-size: @ColHeaderSize;
    background: #ebccd1;
    margin-top: @ColTopHeight;
  }
  .panel-success {
    font-size: @ColHeaderSize;
    background: #d6e9c6;
    margin-top: @ColTopHeight;
  }
  .panel-warning {
    font-size: @ColHeaderSize;
    background: #faebcc;
    margin-top: @ColTopHeight;
  }
}
</style>
