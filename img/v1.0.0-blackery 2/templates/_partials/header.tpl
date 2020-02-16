{**
 * 2007-2017 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2017 PrestaShop SA
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 * International Registered Trademark & Property of PrestaShop SA
 *}

  {if $an_width_on_mobile =='992'}

  {block name='header_banner'}
    <div class="header-banner">
      {hook h='displayBanner'}
    </div>
  {/block}


  {block name='header_nav'}
    <nav class="header-nav tablet-h" >
      <div class="container">
          <div class="row">
            <div class="hidden-md-down header-nav-inside vertical-center">
              <div class="col-md-6 col-xs-12 left-nav" >
                {hook h='displayNav1'}
              </div>
              <div class="col-md-6 right-nav">
                  {hook h='displayNav2'}
              </div>
            </div>
            <div class="hidden-lg-up text-sm-center mobile">
              <div class="float-xs-left" id="menu-icon">
                <i class="material-icons d-inline">&#xE5D2;</i>
                <i class="btn-close-menu hidden-menu"></i>
              </div>
              <div class="float-xs-right" id="_mobile_cart"></div>
              <div class="top-logo" id="_mobile_logo"></div>
              <div class="clearfix"></div>
            </div>
          </div>
      </div>
    </nav>
  {/block}

  {block name='header_top'}
    <div class="header-top tablet-h" data-mobilemenu='{$an_width_on_mobile}'>
      <div class="container">
        <div class="row vertical-center header-top-wrapper">
          <div class="col-md-2 hidden-md-down vertical-center" id="_desktop_logo">
            <a href="{$urls.base_url}">
              <img class="logo img-responsive" src="{$shop.logo}" alt="{$shop.name}">
            </a>
          </div>
          <div class="col-md-10 col-xs-12 position-static">
            <div class="row vertical-center">
              {hook h='displayTop'}
              <div class="clearfix"></div>
            </div>
          </div>
        </div>
        <div id="mobile_top_menu_wrapper" class="row hidden-lg-up" style="display:none;">
          <div class="js-top-menu mobile" id="_mobile_top_menu"></div>
          <div class="js-top-menu-bottom">
            {hook h='displayMobileSearch'}
            {hook h='displayMobileMenu'}
            <div  id="_mobile_user_info"></div>
            <div id="_mobile_currency_selector"></div>
            <div id="_mobile_language_selector"></div>
            <div id="_mobile_contact_link"></div>
          </div>
        </div>
      </div>
    </div>
    {hook h='displayNavFullWidth'}
  {/block}



  {else}
    

  {block name='header_banner'}
    <div class="header-banner">
      {hook h='displayBanner'}
    </div>
  {/block}


  {block name='header_nav'}
    <nav class="header-nav tablet-v">
      <div class="container">
          <div class="row">
            <div class="hidden-sm-down header-nav-inside vertical-center">
              <div class="col-md-4 col-xs-12" >
                {hook h='displayNav1'}
              </div>
              <div class="col-md-8 right-nav">
                  {hook h='displayNav2'}
              </div>
            </div>
            <div class="hidden-md-up text-sm-center mobile">
              <div class="float-xs-left" id="menu-icon">
                <i class="material-icons d-inline">&#xE5D2;</i>
              </div>
              <div class="float-xs-right" id="_mobile_cart"></div>
              <div class="top-logo" id="_mobile_logo"></div>
              <div class="clearfix"></div>
            </div>
          </div>
      </div>
    </nav>
  {/block}

  {block name='header_top'}
    <div class="header-top tablet-v" data-mobilemenu='{$an_width_on_mobile}'>
      <div class="container">
        <div class="row vertical-center header-top-wrapper">
          <div class="col-md-2 hidden-sm-down vertical-center" id="_desktop_logo">
            <a href="{$urls.base_url}">
              <img class="logo img-responsive" src="{$shop.logo}" alt="{$shop.name}">
            </a>
          </div>
          <div class="col-md-10 col-xs-12 position-static">
            <div class="row vertical-center">
              {hook h='displayTop'}
              <div class="clearfix"></div>
            </div>
          </div>
        </div>
        <div id="mobile_top_menu_wrapper" class="row hidden-md-up" style="display:none;">
          <div class="js-top-menu mobile" id="_mobile_top_menu"></div>
          <div class="js-top-menu-bottom">
            {hook h='displayMobileMenu'}
            <div  id="_mobile_user_info"></div>
            <div id="_mobile_currency_selector"></div>
            <div id="_mobile_language_selector"></div>
            <div id="_mobile_contact_link"></div>
          </div>
        </div>
      </div>
    </div>
    {hook h='displayNavFullWidth'}
  {/block}

  {/if}  
