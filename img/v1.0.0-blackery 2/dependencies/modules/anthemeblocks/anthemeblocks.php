<?php
/**
* 2007-2017 PrestaShop
*
* NOTICE OF LICENSE
*
* This source file is subject to the Academic Free License (AFL 3.0)
* that is bundled with this package in the file LICENSE.txt.
* It is also available through the world-wide-web at this URL:
* http://opensource.org/licenses/afl-3.0.php
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
*  @author    Apply Novation <applynovation@gmail.com>
*  @copyright 2016-2017 Apply Novation
*  @license   http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
*/

if (!defined('_PS_VERSION_')) {
    exit;
}

require_once _PS_MODULE_DIR_.'anthemeblocks/lib/Spyc.php';
require_once _PS_MODULE_DIR_.'anthemeblocks/lib/Finder.php';
include_once _PS_MODULE_DIR_.'anthemeblocks/classes/AnThemeBlockData.php';
include_once _PS_MODULE_DIR_.'anthemeblocks/classes/AnThemeBlockDataValidator.php';
include_once _PS_MODULE_DIR_.'anthemeblocks/classes/AnThemeBlock.php';
require_once _PS_MODULE_DIR_.'anthemeblocks/classes/AnThemeBlockCollection.php';

class Anthemeblocks extends Module
{
    const PREFIX = 'an_st_';
    public $blocks_dir = '';

    protected static $ignore_hook = array(
        'additionalCustomerFormFields',
        'displayAdminProductsExtra',
        'addWebserviceResources',
        'displayAfterBodyOpeningTag',
        'displayAfterCarrier',
        'displayAttributeForm',
        'displayAttributeGroupForm',
        'displayAttributeGroupPostProcess',
        'displayAuthenticateFormBottom',
        'dashboardData',
        'dashboardZoneOne',
        'dashboardZoneTwo',
        'displayAdminOrder',
        'displayAdminOrderContentOrder',
        'displayAdminOrderContentShip',
        'displayAdminOrderTabOrder',
        'displayAdminOrderTabShip',
        'displayAdminAfterHeader',
        'displayAdminCustomers',
        'displayAdminNavBarBeforeEnd',
        'displayAdminStatsGraphEngine',
        'displayAdminStatsGridEngine',
        'displayAdminStatsModules',
        'displayBackOfficeCategory',
        'displayBackOfficeFooter',
        'displayBackOfficeHome',
        'displayBackOfficeTop',
        'displayCreateAccountEmailFormBottom',
        'displayDashboardTop',
        'displayFeatureForm',
        'displayFeaturePostProcess',
        'displayFeatureValueForm',
        'displayFeatureValuePostProcess',
        'displayInvoice',
        'displayInvoiceLegalFreeText',
        'displayMaintenance',
        'displayOverrideTemplate',
        'displayPDFInvoice',
        'displayProductListFunctionalButtons',
        'displayProductPageDrawer',
        'paymentOptions',
        'productSearchProvider',
        'filterCategoryContent',
        'filterCmsCategoryContent',
        'filterCmsContent',
        'filterHtmlContent',
        'filterManufacturerContent',
        'filterProductContent',
        'filterProductSearch',
        'filterSupplierContent',
        'sendMailAlterTemplateVars',
        'validateCustomerFormFields',
        'displayBeforeCarrier',
        'displayCarrierExtraContent',
        'displayCarrierList',
        'displayCustomerAccountForm',
        'displayCustomerAccountFormTop',
        'displayOrderDetail',
        'displayPaymentReturn',
        'displayProductExtraContent',
        'search',
        'displayAdminProductsCombinationBottom',
        'displayAdminProductsMainStepLeftColumnBottom',
        'displayAdminProductsMainStepLeftColumnMiddle',
        'displayAdminProductsMainStepRightColumnBottom',
        'displayAdminProductsOptionsStepBottom',
        'displayAdminProductsOptionsStepTop',
        'displayAdminProductsPriceStepBottom',
        'displayAdminProductsQuantitiesStepBottom',
        'displayAdminProductsSeoStepBottom',
        'displayAdminProductsShippingStepBottom',
        'displayBeforeBodyClosingTag',
        'displayCartExtraProductActions',
        'displayCartExtraProductActions',
        'displayOrderConfirmation',
        'displayOrderConfirmation2',
    );

    public static $ignore_form_hook = array(
        'displayBackOfficeHeader',
        'Header',
    );

    public static $custom_hooks = array(
        'displaySliderContainerWidth',
        'displayCopyrightContainer',
        'displayHomeBefore',
        'displayHomeAfter',
    );

    public function __construct()
    {
        $this->name = 'anthemeblocks';
        $this->tab = 'front_office_features';
        $this->version = '2.0.22';
        $this->author = 'anvanto';
        $this->need_instance = 0;
        $this->bootstrap = true;

        parent::__construct();

        $this->blocks_dir = $this->local_path.'blocks/';
        $this->displayName = $this->l('AN Theme Blocks');
        $this->description = $this->l('Anvanto Theme Blocks');
        $this->new =  version_compare(_PS_VERSION_, '1.7.4', '>') ? false : true;

        // $this->importBlocks();
    }

    public function renderHomeproductsForm($object)
    {
        $products = array();

        $tree = new HelperTreeCategories('associated-categories-tree-'.uniqid(), $this->l('Associated categories'));
        $tree->setRootCategory((int)Category::getRootCategory()->id)
            ->setUseCheckBox(true)
            ->setUseSearch(true);

        if (Validate::isLoadedObject($object)) {
            $formdata = $object->getFormdata();

            if (Validate::isLoadedObject($formdata)) {
                $prefix = 'additional_field_'.basename($object->template, '.tpl').'_';
                $values = array_map('intval', explode(',', $formdata->__get($prefix.'value')));
                $tree->setSelectedCategories($values);

                $products = $formdata->__get($prefix.'type') == 'category' ? array() : $values;
            }
        }

        return array(
            array(
                'type' => 'radio',
                'label' => $this->l('Type:'),
                'name' => 'type',
                'required' => true,
                'values' => array(
                    array(
                        'id' => 'category_on',
                        'value' => 'category',
                        'label' => $this->l('Category')
                    ),
                    array(
                        'id' => 'ids_on',
                        'value' => 'ids',
                        'label' => $this->l('Product IDs')
                    ),
                    array(
                        'id' => 'new_on',
                        'value' => 'new',
                        'label' => $this->l('New Products')
                    ),
                    array(
                        'id' => 'bestsellers_on',
                        'value' => 'bestsellers',
                        'label' => $this->l('Bestsellers')
                    ),
                    array(
                        'id' => 'sale_on',
                        'value' => 'sale',
                        'label' => $this->l('Sale Products')
                    ),
                    array(
                        'id' => 'featured_on',
                        'value' => 'featured',
                        'label' => $this->l('Featured')
                    )
                ),
            ),

            array(
                'type' => 'hidden',
                'name' => 'value',
                'id' => 'value'
            ),
            array(
                'type' => 'free',
                'ignore' => true,
                // 'label' => $this->l('Categories:'),
                'default_value' => '<div id="additional_field_#tpl#_category_tree">'.$tree->render().'</div>',
                'name' => 'category_tree'
            ),
            array(
                'type' => 'free',
                'ignore' => true,
                'default_value' => '<div id="additional_field_#tpl#_products_tree">'.$this->getProductsTree($products).'</div>',
                'name' => 'product_tree',
                'id' => 'product_tree'
            ),
            array(
                'type' => 'text',
                'ignore' => true,
                'label' => $this->l('Products:'),
                'name' => 'products_input',
                'id' => 'products_input',
                'size' => 50,
                'maxlength' => 10,
            ),

            array(
                'type' => 'text',
                'label' => $this->l('Products count:'),
                'name' => 'products_count',
                'id' => 'products_count',
                'validator' => 'isUnsignedInt',
                'size' => 50,
                'maxlength' => 10,
                'required' => true,
                'default_value' => 3
            )
        );
    }

    public function getProductsTree($products)
    {
        $collection = new Collection('Product');
        $context = Context::getContext();

        $this->context->smarty->assign(array(
            'products' => !empty($products) ? array_map(function ($product) use ($context) {
                $id_image = Product::getCover($product->id);
                $product->name = $product->name[$context->language->id];

                if (is_array($id_image) && isset($id_image['id_image'])) {
                    $image = new Image($id_image['id_image']);
                    $product->image = _THEME_PROD_DIR_.$image->getImgPath().'.'.$image->image_format;
                }

                return $product;
            }, iterator_to_array($collection->where('id_product', 'in', $products))) : array()
        ));

        return $this->display(__FILE__, 'views/templates/admin/products_tree.tpl');
    }

    public static function getHooks()
    {
        $_hooks = Hook::getHooks();

        foreach ($_hooks as $key => $_hook) {
            if (Tools::substr($_hook['name'], 0, 6) == 'action' || in_array($_hook['name'], self::$ignore_hook)) {
                unset($_hooks[$key]);
            }
        }
        
        return $_hooks;
    }

    public function install()
    {
        if (Tools::file_exists_no_cache(_PS_MODULE_DIR_.$this->name.'/sql/install.php')) {
            include(_PS_MODULE_DIR_.$this->name.'/sql/install.php');
        } else {
            return false;
        }
        
        $install = parent::install();

        $this->_theme_path = __PS_BASE_URI__;
        $this->context->smarty->assign('theme_path', $this->_theme_path);
        
        $languages = Language::getLanguages();

        $new_tab = new Tab();
        $new_tab->class_name = 'AdminThemeBlocks';
        $new_tab->id_parent = Tab::getIdFromClassName('IMPROVE');
        $new_tab->module = $this->name;
        $new_tab->active = 1;
        foreach ($languages as $language) {
            $new_tab->name[$language['id_lang']] = 'AN Theme Blocks';
        }
        $new_tab->add();
        
        foreach (self::getHooks() as $hook) {
            $this->registerHook($hook['name']);
        }
        
        foreach (self::$custom_hooks as $_hook) {
            $this->registerHook($_hook);
        }

        return $install
            && $this->importBlocks();
    }

    protected function importBlocks()
    {
        return !(bool)count(array_filter(glob($this->blocks_dir.'*.json'), function ($file) {
            $data = Tools::jsonDecode(Tools::file_get_contents($file), true);
            $block = new AnThemeBlock();

            $result = $block->import($data)->save();

            if ($block->id) {
                foreach ($data['children'] as $children) {
                    $_block = new AnThemeBlock();
                    $_block->import($children)->id_parent = $block->id;
                    $_block->save();

                    if ($_block->id) {
                        if (is_array($children['formdata'])) {
                            $formdata = new AnThemeBlockData();
                            $formdata->setData($children['formdata']['data'])->setIdBlock($_block->id)->save();
                        }
                    }
                }

                if (is_array($data['formdata'])) {
                    $formdata = new AnThemeBlockData();
                    $formdata->setData($data['formdata']['data'])->setIdBlock($block->id)->save();
                }
            }

            return false;
        }));
    }

    public function uninstall()
    {
        if (Tools::file_exists_no_cache(_PS_MODULE_DIR_.$this->name.'/sql/uninstall.php')) {
            include(_PS_MODULE_DIR_.$this->name.'/sql/uninstall.php');
        }

        $idTab = Tab::getIdFromClassName('AdminThemeBlocks');
        $deletion_tab = true;

        if ($idTab) {
            $tab = new Tab($idTab);
            $deletion_tab = $tab->delete();
        }
        
        foreach (self::getHooks() as $hook) {
            $this->unregisterHook($hook['name']);
        }

        return parent::uninstall()
            && $deletion_tab;
    }

    public function __call($function, $args)
    {
        $html = '';
        $hookName = str_replace('hook', '', $function);
        
        $hookStorage = array();
        foreach (Hook::getHooks() as $hook) {
            $hookStorage[] = $hook['name'];
        }
        if (!in_array($hookName, $hookStorage)) {
            return '';
        }

        $blocks = AnThemeBlock::getBlocksByHookName($hookName);

        foreach ($blocks as $block) {
            $html .= $block->getContent();
        }

        /**
         * PS 1.7.0 - What is the "\PrestaShopBundle\Service\Hook\HookFinder::find" method?
         * It brakes product page when a module tries to use the "displayProductExtraContent" hook.
         * Why should it return Array type instead of String?
        **/
        if ($hookName == 'displayProductExtraContent') {
            return array();
        }

        return $html;
    }

    public function renderProducts($products)
    {
        if (version_compare(_PS_VERSION_, '1.7.0.0', '<')) {
            $this->context->smarty->assign(array(
                'products' => $products
            ));

            return $this->context->smarty->createTemplate(_PS_ALL_THEMES_DIR_._THEME_NAME_.'/product-list.tpl', null, null, $this->context->smarty)->fetch();
        } else {
            $this->context->smarty->assign(array(
                'listing' => array(
                    'products' => $products,
                    'pagination' => null
                )
            ));

            return $this->context->smarty->createTemplate(_PS_ALL_THEMES_DIR_._THEME_NAME_.'/templates/catalog/_partials/products.tpl', null, null, $this->context->smarty)->fetch();
        }
    }

    //{Module::getInstanceByName('anthemeblocks')->getBlockContent('block_identifier')}
    public static function getBlockContent($block_identifier)
    {
        return self::getBlockObject($block_identifier)->content;
    }

    //{Module::getInstanceByName('anthemeblocks')->getBlockObject('block_identifier')->title}
    public static function getBlockObject($block_identifier)
    {
        return AnThemeBlock::getBlockObject($block_identifier);
    }

    //{Module::getInstanceByName('anthemeblocks')->getBlock('block_identifier')}
    public function getBlock($block_identifier)
    {
        $block = AnThemeBlockCollection::get((int)Context::getContext()->language->id)->where('block_identifier', '=', $block_identifier)->getFirst();

        if ($block) {
            $this->context->smarty->assign('an_staticblock', $block);

            return $this->display($this->name, $block->template);
        }

        return '';
    }

    public static function isEnabledBlock($block_identifier)
    {
        return (bool)AnThemeBlockCollection::get((int)Context::getContext()->language->id)
            ->where('block_identifier', '=', $block_identifier)
            ->where('status', '=', 1)
            ->count();
    }

    protected function addBlockJs($basedir, $js)
    {
        if (is_array($js)) {
            $priority = isset($js['priority']) ? (int)$js['priority'] : 200;
            $position = isset($js['position']) ? (string)$js['position'] : 'bottom';
            $path = isset($js['path']) ? (string)$js['path'] : null;
            $server = isset($js['server']) && in_array((string)$js['server'], array('local', 'remote')) ? (string)$js['server'] : 'local';
        } else if (is_string($js)) {
            $priority = 200;
            $position = 'bottom';
            $path = $js;
            $server = 'local';
        }

        if ($path === null) {
            return false;
        }

        if (version_compare(_PS_VERSION_, '1.7.0.0', '<')) {
            $this->context->controller->addJS($this->_path.$path);
        } else {
            $this->context->controller->registerJavascript(sha1('modules/'.$this->name.'/'.$basedir.'/'.$path), 'modules/'.$this->name.'/'.$path, array(
                'priority' => $priority,
                'position' => $position,
                'server' => $server
            ));
        }
    }

    protected function addBlockCSS($basedir, $css)
    {
        if (is_array($css)) {
            $priority = isset($css['priority']) ? (int)$css['priority'] : 200;
            $media = isset($css['media']) ? (string)$css['media'] : 'all';
            $path = isset($css['path']) ? (string)$css['path'] : null;
            $server = isset($css['server']) && in_array((string)$css['server'], array('local', 'remote')) ? (string)$css['server'] : 'local';
        } else if (is_string($css)) {
            $priority = 200;
            $media = 'all';
            $path = $css;
            $server = 'local';
        }

        if ($path === null) {
            return false;
        }
        
        if (version_compare(_PS_VERSION_, '1.7.0.0', '<')) {
            $this->context->controller->addCSS($this->_path.$path);
        } else {
            $this->context->controller->registerStylesheet(sha1('modules/'.$this->name.'/'.$basedir.'/'.$path), 'modules/'.$this->name.'/'.$path, array(
                'priority' => $priority,
                'media' => $media,
                'server' => $server
            ));
        }
    }

    public function hookDisplayBackOfficeHeader($params = null)
    {
        $this->context->controller->addCSS($this->_path.'views/css/icon.css');
        
        if (Dispatcher::getInstance()->getController() == 'AdminThemeBlocks') {
            $this->context->controller->addJquery();

            if (!Tools::getIsset('addanthemeblocks') && !Tools::getIsset('updateanthemeblocks')) {
                $this->context->controller->addCSS($this->_path.'views/css/back-table.css');
                $this->context->controller->addCSS($this->_path.'views/css/back.css');
                $this->context->controller->addJS($this->_path.'views/js/Sortable/Sortable.min.js');
                $this->context->controller->addJS($this->_path.'views/js/sorting.min.js');
                $this->context->controller->addJS($this->_path.'views/js/back.js');
            }
        }
    }

    public function hookDisplayHeader($params = null)
    {
        foreach (AnThemeBlock::getActive() as $block) {
            $basedir = pathinfo($block->template, PATHINFO_DIRNAME);

            foreach ($block->getConfigJS() as $js) {
                $this->addBlockJs($basedir, $js);
            }
                
            foreach ($block->getConfigCSS() as $css) {
                $this->addBlockCSS($basedir, $css);
            }
        }

        if (version_compare(_PS_VERSION_, '1.7.0.0', '<')) {
            $this->context->controller->addCSS($this->_path.'views/css/front.css');
        } else {
            $this->context->controller->registerStylesheet('modules-an-staticblock', 'modules/'.$this->name.'/views/css/front.css', array('media' => 'all', 'priority' => 200));
        }
    }
}
