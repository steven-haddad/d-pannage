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

return Db::getInstance()->execute('
    CREATE TABLE IF NOT EXISTS `'._DB_PREFIX_.'anthemeblock` (
        `id_anthemeblock` int(10) unsigned NOT NULL auto_increment,
        `id_parent` int(10) NOT NULL default "0",
        `status` int(1) NOT NULL default "1",
        `block_identifier` varchar(255) NOT NULL,
        `hook_ids` text,
        `template` varchar(255) NOT NULL,
        `img` varchar(255),
        `position` int(10) NOT NULL default "0",
        `date_add` datetime NOT NULL,
        `date_upd` datetime NOT NULL,
        PRIMARY KEY  (`id_anthemeblock`)
    ) ENGINE='._MYSQL_ENGINE_.' DEFAULT CHARSET=utf8;

    CREATE TABLE IF NOT EXISTS `'._DB_PREFIX_.'anthemeblock_shop` (
        `id_anthemeblock` int(10) unsigned NOT NULL auto_increment,
        `id_shop` int(10) unsigned NOT NULL,
        PRIMARY KEY (`id_anthemeblock`, `id_shop`)
    ) ENGINE='._MYSQL_ENGINE_.' DEFAULT CHARSET=utf8;

    CREATE TABLE IF NOT EXISTS `'._DB_PREFIX_.'anthemeblock_data` (
        `id_anthemeblock_data` int(10) unsigned NOT NULL auto_increment,
        `id_anthemeblock` int(10) unsigned NOT NULL,
        PRIMARY KEY (`id_anthemeblock_data`)
    ) ENGINE='._MYSQL_ENGINE_.' DEFAULT CHARSET=utf8;

    CREATE TABLE IF NOT EXISTS `'._DB_PREFIX_.'anthemeblock_data_lang` (
        `id_anthemeblock_data` int(10) unsigned NOT NULL,
        `id_lang` int(10) unsigned NOT NULL,
        `data` text,
        PRIMARY KEY (`id_anthemeblock_data`,`id_lang`)
    ) ENGINE='._MYSQL_ENGINE_.' DEFAULT CHARSET=utf8;

    CREATE TABLE IF NOT EXISTS `'._DB_PREFIX_.'anthemeblock_lang` (
        `id_anthemeblock` int(10) unsigned NOT NULL,
        `id_lang` int(10) unsigned NOT NULL,
        `title` varchar(255) NOT NULL,
        `link` varchar(255) NOT NULL,
        `image` varchar(255) NOT NULL,
        `content` text,
        PRIMARY KEY (`id_anthemeblock`,`id_lang`)
    ) ENGINE='._MYSQL_ENGINE_.' DEFAULT CHARSET=utf8;');
