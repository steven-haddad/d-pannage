{*
* 2018 Anvanto
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
*  @author Anvanto (anvantoco@gmail.com)
*  @copyright  2018 anvanto.com

*  @license    http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
*  International Registered Trademark & Property of PrestaShop SA
*}

{extends file=$layout}

{block name='content'}
	<section id="main">
		{if isset($category) && $category->id_anblogcat && $category->active}
		{if isset($no_follow) AND $no_follow}
			{assign var='no_follow_text' value='rel="nofollow"'}
		{else}
			{assign var='no_follow_text' value=''}
		{/if}
		<div id="blog-category" class="blogs-container">
				{if $category->show_title}
					<h1>{$category->title|escape:'html':'UTF-8'}</h1>
				{/if}
			<div class="inner">
				{if $config->get('listing_show_categoryinfo',1)}
					<div class="panel panel-default">
						<div class="panel-body">
							{if $category->image}
								<div class="row">
									<div class="category-image col-xs-12 col-sm-12 col-lg-4 col-md-6 text-center">
										<img src="{$category->image|escape:'html':'UTF-8'}" class="img-fluid" alt="" />
									</div>
									<div class="col-xs-12 col-sm-12 col-lg-8 col-md-6 category-info caption">
										{$category->content_text nofilter}{* HTML form , no escape necessary *}
									</div>	
								</div>	
							{else}
								<div class="category-info caption">
									{$category->content_text nofilter}{* HTML form , no escape necessary *}
								</div>
							{/if}					 
						</div>
					</div> 
				{/if}

				{if $childrens&&$config->get('listing_show_subcategories',1)}
				<div class="childrens">
					<h3>{l s='Childrens' mod='anblog'}</h3>
						<div class="row">
							{foreach $childrens item=children name=children}
								<div class="col-lg-3">
									{if isset($children.thumb)}
									<img src="{$children.thumb|escape:'html':'UTF-8'}" class="img-fluid"/>
									{/if}
									<h4><a href="{$children.category_link|escape:'html':'UTF-8'}" title="{$children.title|escape:'html':'UTF-8'}">{$children.title|escape:'html':'UTF-8'}</a></h4>
									<div class="child-desc">{$children.content_text nofilter}</div>{* HTML form , no escape necessary *}
								</div>
							{/foreach}
						</div>
				</div>
				{/if}

				<div class="clearfix"></div>
			 
				{if count($leading_blogs)+count($secondary_blogs)}
					<h3>{l s='Recent blog posts' mod='anblog'}</h3>
					{if count($leading_blogs)}
					<div class="leading-blog">  
						{foreach from=$leading_blogs item=blog name=leading_blog}
						 
							{if ($smarty.foreach.leading_blog.iteration%$listing_leading_column==1)&&$listing_leading_column>1}
								<div class="row">
							{/if}
							<div class="{if $listing_leading_column<=1}no{/if}col-lg-{floor(12/$listing_leading_column|escape:'html':'UTF-8')}">
								{include file="module:anblog/views/templates/front/default/_listing_blog.tpl"}
							</div>	
							{if ($smarty.foreach.leading_blog.iteration%$listing_leading_column==0||$smarty.foreach.leading_blog.last)&&$listing_leading_column>1}
								</div>
							{/if}
						
						{/foreach}
					</div>
					{/if}


					{if count($secondary_blogs)}
					<div class="secondary-blog">

						{foreach from=$secondary_blogs item=blog name=secondary_blog}
							{if ($smarty.foreach.secondary_blog.iteration%$listing_secondary_column==1)&&$listing_secondary_column>1}
							  <div class="row">
							{/if}

							<div class="{if $listing_secondary_column<=1}no{/if}col-lg-{floor(12/$listing_secondary_column|escape:'html':'UTF-8')}">
								{include file="module:anblog/views/templates/front/default/_listing_blog.tpl"}
							</div>	
							{if ($smarty.foreach.secondary_blog.iteration%$listing_secondary_column==0||$smarty.foreach.secondary_blog.last)&&$listing_secondary_column>1}
							</div>
							{/if}
						{/foreach}
					</div>
					{/if}
				
					<div class="top-pagination-content clearfix bottom-line">
						{include file="module:anblog/views/templates/front/default/_pagination.tpl"}
					</div>
				{elseif empty($childrens)}
					<div class="alert alert-warning">{l s='Sorry, no categories has been created in the blog yet, but it will be done soon' mod='anblog'}</div>
				{/if}  
				  
			</div>
		</div>
		{else}
		<div class="alert alert-warning">{l s='Sorry, no categories has been created in the blog yet, but it will be done soon' mod='anblog'}</div>
		{/if}
	</section>
{/block}