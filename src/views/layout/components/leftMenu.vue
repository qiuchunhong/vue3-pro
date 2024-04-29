<template>
  <div class="left-menu">
    <a-menu
      v-model:selectedKeys="selectedKeys"
      mode="inline"
      :open-keys="openKeys"
      :inline-collapsed="collapsed"
      :style="menuWidth"
      @select="menuSelect"
      class="left-menu-menu"
    >
      <template v-for="item in list" :key="item.path">
        <template v-if="!item.children">
          <a-menu-item :key="item.path">
            <template #icon>
              <PieChartOutlined />
            </template>
            {{ item.meta.title }}
          </a-menu-item>
        </template>
        <template v-else>
          <sub-menu :key="item.path" :menu-info="item" />
        </template>
      </template>
    </a-menu>

    <div class="collapsed" @click="toggleCollapsed">
      <template v-if="collapsed"><MenuUnfoldOutlined class="icon" /></template>
      <template v-else>
        <div class="c">
          <SettingOutlined class="icon-setting" />导航模式切换
        </div>
        <MenuFoldOutlined
      /></template>
    </div>
  </div>
</template>
<script>
import { defineComponent, reactive, toRefs } from "vue";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  SettingOutlined,
} from "@ant-design/icons-vue";
import SubMenu from "./subMenu.vue";
import { routes } from "@/router/index.js";
import { useRouter } from "vue-router";
export default defineComponent({
  components: {
    PieChartOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    SettingOutlined,
    SubMenu,
  },
  setup() {
    const state = reactive({
      openKeys: [],
      selectedKeys: [],
      collapsed: false,
      menuWidth: "width:256px",
    });
    const list = routes[0].children.sort((a, b) => {
      return a.meta.leval - b.meta.leval;
    });
    // 菜单展开 || 折叠
    const toggleCollapsed = () => {
      state.collapsed = !state.collapsed;
      state.menuWidth = state.collapsed ? "" : "width:256px";
    };
    const router = useRouter();
    const menuSelect = ({ item, key, keyPath }) => {
      // console.log({ item, key, keyPath });
      const path = keyPath.join("/");
      router.push({ path: "/" + path });
    };

    return {
      ...toRefs(state),
      list,
      toggleCollapsed,
      menuSelect,
    };
  },
});
</script>
<style scoped lang="less">
.left-menu {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: @primary-color;
  color: #fff;
  .left-menu-menu {
    flex: 1;
    overflow: auto;
    border: 0;
    background: @primary-color;
    color: #fff;
    /deep/ .ant-menu-item,
    /deep/ .ant-menu-submenu-title {
      margin: 0;
      border-radius: 0;
      width: 100%;
      color: #fff;
      &:hover {
        color: #fff;
        background: rgba(214, 226, 225, 0.4);
      }
    }
    /deep/ .ant-menu-item-selected {
      background: rgba(214, 226, 225, 0.4);
      color: #fff;
    }
  }
  .collapsed {
    font-size: 12px;
    height: 50px;
    border-top: 1px solid @text-shallow-color;
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    align-items: center;
    cursor: pointer;
    .icon {
      width: 60px;
    }
    .icon-setting {
      margin-right: 6px;
    }
  }
}
</style>
