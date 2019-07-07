<?php
/**
 * Description
 *
 * @package Pabelog\Basetheme
 * @since 1.0.0
 * @author Nadiar AS
 * @link https://www.pabelog.com
 * @license MIT
 */

namespace Pabelog\Basetheme;

/**
 * Initialize theme's constants.
 *
 * @return void
 * @since 1.0.0
 */
function init_constants() {

	$child_theme = wp_get_theme();

	define( 'CHILD_THEME_NAME', $child_theme->get( 'Name' ) );
	define( 'CHILD_THEME_URL', $child_theme->get( 'ThemeURI' ) );
	define( 'CHILD_THEME_VERSION', $child_theme->get( 'Version' ) );
	define( 'CHILD_TEXT_DOMAIN', $child_theme->get( 'TextDomain' ) );

	define( 'CHILD_THEME_DIR', get_stylesheet_directory() );
	define( 'CHILD_THEME_URI', get_stylesheet_directory_uri());
	define( 'CHILD_CONFIG_DIR', CHILD_THEME_DIR . '/config' );
}

init_constants();
