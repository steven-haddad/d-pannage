<?php
/**
 * 2007-2017 PrestaShop.
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
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2017 PrestaShop SA
 * @license   http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
 *  International Registered Trademark & Property of PrestaShop SA
 */

if (!defined('_PS_VERSION_')) {
    exit;
}

class AnMegaMenuDropDownConfigurator extends an_megamenu
{
    /**
     * @return mixed
     */
    protected function processSaveDropdown()
    {
        $id_anmenu = (int)Tools::getValue('id_anmenu');
        $id_andropdown = (int)Tools::getValue('id_andropdown');
        $andropdown = new AnDropdown($id_anmenu);
        if ($id_andropdown) {
            $andropdown = new AnDropdown($id_anmenu, $id_andropdown);
        }

        $andropdown->active = (int)Tools::getValue('active');
        $andropdown->position = (int)Tools::getValue('position');
        $andropdown->column = Tools::getValue('column');
        $andropdown->content_type = Tools::getValue('content_type');
        $andropdown->categories = Tools::getValue('categories', array());
        $andropdown->products = Tools::getValue('products', array());
        $andropdown->manufacturers = Tools::getValue('manufacturers', array());

        $languages = Language::getLanguages(false);
        $id_lang_default = (int)$this->context->language->id;
        $static_content = array();
        foreach ($languages as $lang) {
            $static_content[$lang['id_lang']] = Tools::getValue('static_content_' . $lang['id_lang']);
            if (!$static_content[$lang['id_lang']]) {
                $static_content[$lang['id_lang']] = Tools::getValue('static_content_' . $id_lang_default);
            }
        }
        $andropdown->static_content = $static_content;

        $result = $andropdown->validateFields(false);
        if ($result) {
            $andropdown->save();

            if ($id_andropdown) {
                $this->html .= $this->displayConfirmation($this->tr('Dropdown Content has been updated.'));
            } else {
                $this->html .= $this->displayConfirmation($this->tr('Dropdown Content has been created successfully.'));
            }

            $this->_clearCache('*');
            return $andropdown->id;
        } else {
            $this->html .= $this->displayError($this->tr('An error occurred while attempting to save Dropdown Content.'));
        }

        return false;
    }

    /**
     * @return string
     */
    protected function renderDropdownList()
    {
        $id_anmenu = (int)Tools::getValue('id_anmenu');
        $anmenu = new AnMenu($id_anmenu);
        if ((int)$anmenu->drop_column < 1) {
            $msg = $this->tr('You have to ENABLE the "Dropdown Menu Columns" option.');
            if (!$id_anmenu) {
                $msg = $this->tr('You have to SAVE this menu before adding a dropdown content.');
            }
            $dropdown_title = $this->tr('Dropdown Contents');
            $result = '
                <div class="panel col-lg-12">
                    <div class="panel-heading">' . $dropdown_title . '</div>
                    <div class="table-responsive-row clearfix">' . $msg . '</div>
                </div>';

            return $result;
        }

        $andropdowns = AnDropdown::getList($id_anmenu, (int)$this->context->language->id, false);

        $helper = new HelperList();
        $helper->shopLinkType = '';
        $helper->toolbar_btn['new'] = array(
            'href' => $this->currentIndex . '&addandropdown&id_anmenu=' . $id_anmenu . '&token=' . Tools::getAdminTokenLite('AdminModules'),
            'desc' => $this->tr('Add New'),
        );
        $helper->simple_header = false;
        $helper->listTotal = count($andropdowns);
        $helper->identifier = 'id_andropdown';
        $helper->table = 'andropdown';
        $helper->actions = array('edit', 'delete');
        $helper->show_toolbar = true;
        $helper->no_link = true;
        $helper->module = $this;
        $helper->title = $this->tr(
            'Dropdown Contents',
            array(),
            'Modules.AnMegaMenu.Admin'
        );
        $helper->token = Tools::getAdminTokenLite('AdminModules');
        $helper->currentIndex = $this->currentIndex . '&id_anmenu=' . $id_anmenu;
        $helper->position_identifier = 'andropdown';
        $helper->position_group_identifier = $id_anmenu;

        $helper->toolbar_btn['back'] = array(
            'href' => $this->currentIndex . '&token=' . Tools::getAdminTokenLite('AdminModules'),
            'desc' => $this->tr(
                'Back to Menu list',
                array(),
                'Modules.AnMegaMenu.Admin'
            )
        );

        return $helper->generateList($andropdowns, $this->getDropdownList());
    }

    /**
     * @return array
     */
    protected function getDropdownList()
    {
        $fields_list = array(
            'id_andropdown' => array(
                'title' => $this->tr('ID'),
                'align' => 'center',
                //'class' => 'fixed-width-xs',
                'orderby' => false,
                'search' => false,
                'type' => 'zid_dropdown',
            ),
            'content_type' => array(
                'title' => $this->tr('Content Type'),
                'orderby' => false,
                'search' => false,
                'type' => 'andropdowntype',
            ),
            'position' => array(
                'title' => $this->tr('Position'),
                'align' => 'center',
                'orderby' => false,
                'search' => false,
                //'class' => 'fixed-width-md',
                'position' => true,
                'type' => 'zposition',
            ),
            'active' => array(
                'title' => $this->tr('Status'),
                'active' => 'status',
                'type' => 'bool',
                //'class' => 'fixed-width-xs',
                'align' => 'center',
                'ajax' => true,
                'orderby' => false,
                'search' => false,
            ),
        );

        return $fields_list;
    }

    /**
     * @return mixed
     */
    protected function renderDropdownForm()
    {
        $id_anmenu = (int)Tools::getValue('id_anmenu');

        $helper = new HelperForm();
        $helper->show_toolbar = false;
        $helper->module = $this;
        $helper->default_form_language = $this->context->language->id;
        $helper->allow_employee_form_lang = Configuration::get('PS_BO_ALLOW_EMPLOYEE_FORM_LANG', 0);

        $helper->identifier = $this->identifier;
        $helper->submit_action = 'saveandropdown';
        $helper->currentIndex = $this->currentIndex . '&id_anmenu=' . $id_anmenu;
        $helper->token = Tools::getAdminTokenLite('AdminModules');

        $helper->tpl_vars = array(
            'fields_value' => $this->getDropdownFieldsValues(),
            'languages' => $this->context->controller->getLanguages(),
            'id_language' => $this->context->language->id,
        );

        $form = $helper->generateForm(array($this->getDropdownForm()));

        Context::getContext()->smarty->assign('token', Tools::getAdminTokenLite('AdminModules'));

        return $form;
    }

    /**
     * @return array
     */
    protected function getDropdownForm()
    {
        $id_anmenu = (int)Tools::getValue('id_anmenu');
        $anmenu = new AnMenu($id_anmenu, (int)$this->context->language->id);
        $id_andropdown = (int)Tools::getValue('id_andropdown');
        $andropdown = new AnDropdown($id_anmenu, $id_andropdown, (int)$this->context->language->id);
        $root = Category::getRootCategory();

        $legent_title = $anmenu->name . ' > ' . $this->tr('Add New Dropdown Content');
        if ($id_andropdown) {
            $legent_title = $anmenu->name . ' > ' . $this->tr('Edit Dropdown Content');
        }

        $list_columns = array();
        for ($i = 1; $i <= $anmenu->drop_column; ++$i) {
            $list_columns[$i]['id'] = 'content_' . $i . '_column';
            $list_columns[$i]['value'] = $i;
            $list_columns[$i]['label'] = $i . ($i == 1 ? $this->tr('col') : $this->tr('cols'));
        }

        $content_type_options = array(
            'query' => array(
                array('id' => 'none', 'name' => ''),
                array('id' => 'category', 'name' => $this->tr('Category')),
                array('id' => 'product', 'name' => $this->tr('Product')),
                array('id' => 'html', 'name' => $this->tr('Custom HTML')),
                array('id' => 'manufacturer', 'name' => $this->tr('Manufacturer')),
            ),
            'id' => 'id',
            'name' => 'name',
        );

        $manufacturers = Manufacturer::getManufacturers();
        $list_manufacturer = array();
        if ($manufacturers) {
            foreach ($manufacturers as $manufacturer) {
                $list_manufacturer[$manufacturer['id_manufacturer']] = $manufacturer['name'];
            }
        }

        $fields_form = array(
            'form' => array(
                'legend' => array(
                    'title' => $legent_title,
                    'icon' => 'icon-book',
                ),
                'input' => array(
                    array(
                        'type' => 'hidden',
                        'name' => 'id_andropdown',
                    ),
                    array(
                        'type' => 'switch',
                        'label' => $this->tr('Status'),
                        'name' => 'active',
                        'is_bool' => true,
                        'values' => array(
                            array(
                                'id' => 'active_on',
                                'value' => true,
                                'label' => $this->tr('Enabled'),
                            ),
                            array(
                                'id' => 'active_off',
                                'value' => false,
                                'label' => $this->tr('Disabled'),
                            ),
                        ),
                    ),
                    array(
                        'type' => 'hidden',
                        'name' => 'position',
                    ),
                    array(
                        'type' => 'radio',
                        'label' => $this->tr('Content Columns'),
                        'name' => 'column',
                        'values' => $list_columns,
                        'hint' => $this->tr('The number of columns of dropdown content. Maximum value is "Dropdown Menu Columns"'),
                    ),
                    array(
                        'type' => 'select',
                        'label' => $this->tr('Content Type'),
                        'name' => 'content_type',
                        'id' => 'content_type_selectbox',
                        'options' => $content_type_options,
                        'hint' => $this->tr('Dropdown Content Type.'),
                    ),
                    array(
                        'type' => 'categories',
                        'label' => $this->tr('Select the Parent Categories'),
                        'name' => 'categories',
                        'hint' => $this->tr('Dropdown content will display the subcategories of this Parent Categories'),
                        'tree' => array(
                            'use_search' => false,
                            'id' => 'categoryBox',
                            'root_category' => $root->id,
                            'use_checkbox' => true,
                            'selected_categories' => $andropdown->categories,
                        ),
                        'form_group_class' => 'content_type_category',
                    ),
                    array(
                        'type' => 'product_autocomplete',
                        'label' => $this->tr('Select the Products'),
                        'name' => 'products',
                        'ajax_path' => $this->currentIndex . '&ajax=1&ajaxProductsList&token=' . Tools::getAdminTokenLite('AdminModules'),
                        'hint' => $this->tr('Begin typing the First Letters of the Product Name, then select the Product from the Drop-down List.'),
                        'form_group_class' => 'content_type_product',
                    ),
                    array(
                        'type' => 'textarea',
                        'label' => $this->tr('Custom HTML Content'),
                        'name' => 'static_content',
                        'autoload_rte' => true,
                        'lang' => true,
                        'rows' => 10,
                        'cols' => 100,
                        'form_group_class' => 'content_type_html',
                    ),
                    array(
                        'type' => 'manufacturer',
                        'label' => $this->tr('Select the Manufacturers'),
                        'name' => 'manufacturers',
                        'list_manufacturer' => $list_manufacturer,
                        'form_group_class' => 'content_type_manufacturer',
                    ),
                ),
                'submit' => array(
                    'title' => $this->tr('Save and Stay'),
                ),
                'buttons' => array(
                    array(
                        'href' => $this->currentIndex . '&viewanmenu&id_anmenu=' . $id_anmenu . '&token=' . Tools::getAdminTokenLite('AdminModules'),
                        'title' => $this->tr('Cancel'),
                        'icon' => 'process-icon-cancel',
                    ),
                ),
            ),
        );

        return $fields_form;
    }

    /**
     * @return array
     */
    protected function getDropdownFieldsValues()
    {
        $fields_value = array();

        $id_anmenu = (int)Tools::getValue('id_anmenu');
        $id_andropdown = (int)Tools::getValue('id_andropdown');
        $andropdown = new AnDropdown($id_anmenu, $id_andropdown);

        $fields_value['id_andropdown'] = $id_andropdown;
        $fields_value['active'] = Tools::getValue('active', $andropdown->active);
        $fields_value['position'] = Tools::getValue('position', $andropdown->position);
        $fields_value['column'] = Tools::getValue('column', $andropdown->column);
        $fields_value['content_type'] = Tools::getValue('content_type', $andropdown->content_type);
        $fields_value['products'] = $andropdown->getProductsAutocompleteInfo($this->context->language->id);
        $fields_value['manufacturers'] = $andropdown->manufacturers;

        $languages = Language::getLanguages(false);
        foreach ($languages as $lang) {
            $default_static_content = isset($andropdown->static_content[$lang['id_lang']]) ? $andropdown->static_content[$lang['id_lang']] : '';
            $fields_value['static_content'][$lang['id_lang']] = Tools::getValue('static_content_' . (int)$lang['id_lang'], $default_static_content);
        }

        return $fields_value;
    }
}
