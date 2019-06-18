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

add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\enqueue_scripts_styles' );
/**
 * Enqueues scripts and styles.
 *
 * @since 1.0.0
 */
function enqueue_scripts_styles() {

	wp_enqueue_style(
		CHILD_TEXT_DOMAIN . '-fonts',
		'//fonts.googleapis.com/css?family=Source+Sans+Pro:400,400i,600,700',
		array(),
		CHILD_THEME_VERSION
	);

	wp_enqueue_style( 'dashicons' );

	$suffix = ( defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ) ? '' : '.min';
	wp_enqueue_script(
		CHILD_TEXT_DOMAIN . '-responsive-menu',
		CHILD_URL . "/js/responsive-menus{$suffix}.js",
		array( 'jquery' ),
		CHILD_THEME_VERSION,
		true
	);

	wp_localize_script(
		CHILD_TEXT_DOMAIN . '-responsive-menu',
		'genesis_responsive_menu',
		get_responsive_menu_settings()
	);

	wp_enqueue_script(
		CHILD_TEXT_DOMAIN,
		CHILD_URL . '/js/genesis-sample.js',
		array( 'jquery' ),
		CHILD_THEME_VERSION,
		true
	);

}

/**
 * Defines responsive menu settings.
 *
 * @since 2.3.0
 */
function get_responsive_menu_settings() {

	$localized_script_args = array(
		'mainMenu'         => __( 'Menu', CHILD_TEXT_DOMAIN ),
		'menuIconClass'    => 'dashicons-before dashicons-menu',
		'subMenu'          => __( 'Submenu', CHILD_TEXT_DOMAIN ),
		'subMenuIconClass' => 'dashicons-before dashicons-arrow-down-alt2',
		'menuClasses'      => array(
			'combine' => array(
				'.nav-primary',
			),
			'others'  => array(),
		),
	);

	return $localized_script_args;

}
