<?php

/**
 * Asset loader
 *
 * @package Pabelog\Basetheme\Functions
 * @since 1.0.0
 * @author Nadiar AS
 * @link https://www.pabelog.com
 * @license MIT
 */

namespace Pabelog\Basetheme\Functions;

/*
 * ================
 * ASSET
 * ================
 */

//add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\enqueue_scripts_styles' );
///**
// * Enqueues scripts and styles.
// *
// * @since 1.0.0
// */
//function enqueue_scripts_styles() {
//
//	$root_dir = CHILD_URL . "/assets";
//
//	wp_enqueue_style(
//		CHILD_TEXT_DOMAIN . '-fonts',
//		'//fonts.googleapis.com/css?family=Source+Sans+Pro:400,400i,600,700',
//		array(),
//		CHILD_THEME_VERSION
//	);
//
//	wp_enqueue_style( 'dashicons' );
//
//	$suffix = ( defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ) ? '' : '.min';
//	wp_enqueue_script(
//		CHILD_TEXT_DOMAIN . '-responsive-menu',
//		$root_dir . "/js/responsive-menus{$suffix}.js",
//		array( 'jquery' ),
//		CHILD_THEME_VERSION,
//		true
//	);
//
//	wp_localize_script(
//		CHILD_TEXT_DOMAIN . '-responsive-menu',
//		'genesis_responsive_menu',
//		get_responsive_menu_settings()
//	);
//
//	wp_enqueue_script(
//		CHILD_TEXT_DOMAIN,
//		$root_dir . '/js/genesis-sample.js',
//		array( 'jquery' ),
//		CHILD_THEME_VERSION,
//		true
//	);
//
//}

///**
// * Defines responsive menu settings.
// *
// * @since 1.0.0
// */
//function get_responsive_menu_settings() {
//
//	$localized_script_args = array(
//		'mainMenu'         => __( 'Menu', CHILD_TEXT_DOMAIN ),
//		'menuIconClass'    => 'dashicons-before dashicons-menu',
//		'subMenu'          => __( 'Submenu', CHILD_TEXT_DOMAIN ),
//		'subMenuIconClass' => 'dashicons-before dashicons-arrow-down-alt2',
//		'menuClasses'      => array(
//			'combine' => array(
//				'.nav-primary',
//			),
//			'others'  => array(),
//		),
//	);
//
//	return $localized_script_args;
//
//}


if ( ! is_admin_bar_showing() ) {
	add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\remove_frontend_scripts' );
}
/**
 * Remove unnecessary script from theme.
 *
 * @return void
 * @since 1.0.1
 */
function remove_frontend_scripts() {

	$fe_scripts = array(
		'jquery',
		'wp-embed',
	);

	foreach ( $fe_scripts as $fe_script ) {
		wp_deregister_script( $fe_script );
	}

	remove_frontend_emoji();

}

function remove_frontend_emoji() {
	remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
	remove_action( 'wp_print_styles', 'print_emoji_styles' );
}

if ( ! is_admin() ) {
	add_action( 'wp_print_styles', __NAMESPACE__ . '\remove_frontend_styles' );
}
/**
 *
 * @return void
 * @since 1.0.1
 */
function remove_frontend_styles() {
	$fe_styles = array();

	foreach ( $fe_styles as $fe_style ) {
		wp_deregister_style( $fe_style );
	}
}

add_action( 'wp_print_styles', __NAMESPACE__ . '\add_frontend_styles' );
/**
 *
 * @return void
 * @since 1.0.1
 */
function add_frontend_styles() {
	$fe_styles = array( 'tachyons', 'theme/style' );
	$css_path = CHILD_THEME_URI . "/assets/css/";

	foreach ( $fe_styles as $fe_style ) {
		wp_enqueue_style( $fe_style, $css_path . $fe_style . ".css" );
	}
}