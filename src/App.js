
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import Navbar from './navbar'
import Logo from './logo_and_Search_box';
import Category from './Product_category_bar';
import Leftnav from './Left_navigation_bar';
import CarouselMap from './Carousel_map';
import Rightnav from './Right_navigation_bar';
import Recommended from './Recommended_today';
import Hot from './Hot_Selling_Rankings';
import Guess from './Guess_you_like';
import Household from './Household_appliances';
import BottomMenu from './Bottom_menu';
import BackToTop from './Back_to_top';

function App() {
  return (
    <div>
      <div className='overall'>
        {/* 顶部菜单栏 */}
        <Navbar></Navbar>
        {/* logo与搜索框 */}
        <Logo></Logo>
        {/* 商品分类栏 */}
        <Category></Category>

        <hr className='partition'></hr>

        <div className='centernav'>
          {/* 左侧导航栏 */}
          <Leftnav></Leftnav>
          {/* 二级菜单 */}

          {/* 轮播图 */}
          <CarouselMap></CarouselMap>

          {/* 右侧推荐栏 */}
          <Rightnav></Rightnav>
        </div>


        {/* 今日推荐 */}
        <Recommended></Recommended>

        {/* 热卖排行 */}
        <Hot></Hot>

        {/* 猜你喜欢 */}
        <Guess></Guess>

        {/* 家用电器 */}
        <Household></Household>

        <Household></Household>

        {/* 页尾 */}
        <BottomMenu></BottomMenu>


        {/* 回到顶部 */}
        <BackToTop></BackToTop>

      </div>
    </div>
  );
}

export default App;
