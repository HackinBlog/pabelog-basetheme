<?php
/**
 * Theme settings.
 *
 * Genesis 2.9+ updates these settings when themes are activated.
 *
 * @package Pabelog\Basetheme\Config
 * @since 1.0.0
 * @author Nadiar AS
 * @link https://www.pabelog.com
 * @license MIT
 */

namespace Pabelog\Basetheme\Config;

$child_settings = array(
	'blog_cat_num'              => 6,
	'breadcrumb_home'           => 0,
	'breadcrumb_front_page'     => 0,
	'breadcrumb_posts_page'     => 0,
	'breadcrumb_single'         => 0,
	'breadcrumb_page'           => 0,
	'breadcrumb_archive'        => 0,
	'breadcrumb_404'            => 0,
	'breadcrumb_attachment'     => 0,
	'content_archive'           => 'full',
	'content_archive_limit'     => 0,
	'content_archive_thumbnail' => 0,
	'image_size'                => '',
	'image_alignment'           => 'alignleft',
	'posts_nav'                 => 'numeric',
	'site_layout'               => 'content-sidebar',
);

return array(
	GENESIS_SETTINGS_FIELD            => $child_settings,
	'posts_per_page'                  => 6,
);