// import default css
import 'element-plus/dist/index.css';

import { ElMenu, ElIcon, ElDropdown, ElDropdownMenu, ElDropdownItem, ElBacktop, ElForm, ElInput, ElButton } from 'element-plus';

const installElement = (app) => {
  app.use(ElMenu).use(ElIcon).use(ElDropdown).use(ElDropdownMenu).use(ElDropdownItem).use(ElBacktop).use(ElForm)
    .use(ElInput).use(ElButton);
};

export default installElement;
