<?php
/**
 * Description
 *
 * @package Pabelog\Basetheme\Structure
 * @since 1.0.0
 * @author Nadiar AS
 * @link https://www.pabelog.com
 * @license MIT
 */
namespace Pabelog\Basetheme\Structure;


add_action( 'genesis_theme_settings_metaboxes', __NAMESPACE__ . '\remove_metaboxes_header' );
/**
 * Removes output of unused admin settings metaboxes.
 *
 * @param string $_genesis_admin_settings The admin screen to remove meta boxes from.
 *
 * @since 2.6.0
 *
 */
function remove_metaboxes_header( $_genesis_admin_settings ) {

	remove_meta_box( 'genesis-theme-settings-header', $_genesis_admin_settings, 'main' );
	remove_meta_box( 'genesis-theme-settings-nav', $_genesis_admin_settings, 'main' );

}

add_filter( 'genesis_customizer_theme_settings_config', __NAMESPACE__ . '\remove_customizer_settings' );
/**
 * Removes output of header and front page breadcrumb settings in the Customizer.
 *
 * @param array $config Original Customizer items.
 *
 * @return array Filtered Customizer items.
 * @since 2.6.0
 *
 */
function remove_customizer_settings( array $config ) {

	unset( $config['genesis']['sections']['genesis_header'] );
	unset( $config['genesis']['sections']['genesis_breadcrumbs']['controls']['breadcrumb_front_page'] );

	return $config;

}

// Displays custom logo.
add_action( 'genesis_site_title', 'the_custom_logo', 0 );


remove_action('genesis_header', 'genesis_do_header');
add_action( 'genesis_header', __NAMESPACE__ . '\child_header' );
/**
 * Echo the child header, including the #title-area div, along with #title and #description, as well as the .widget-area.
 *
 * Does the `genesis_site_title`, `genesis_site_description` and `genesis_header_right` actions.
 *
 * @since 1.0.1
 *
 * @global $wp_registered_sidebars Holds all of the registered sidebars.
 */
function child_header() {

	global $wp_registered_sidebars;

	genesis_markup(
		array(
			'open'    => '<div %s>',
			'context' => 'title-area',
		)
	);

	/**
	 * Fires inside the title area, before the site description hook.
	 *
	 * @since 1.0.1
	 */
	do_action( 'genesis_site_title' );

	/**
	 * Fires inside the title area, after the site title hook.
	 *
	 * @since 1.0.1
	 */
	do_action( 'genesis_site_description' );

	genesis_markup(
		array(
			'close'   => '</div>',
			'context' => 'title-area',
		)
	);

	if ( has_action( 'genesis_header_right' ) || ( isset( $wp_registered_sidebars['header-right'] ) && is_active_sidebar( 'header-right' ) ) ) {

		genesis_markup(
			array(
				'open'    => '<div %s>',
				'context' => 'header-widget-area',
			)
		);

		/**
		 * Fires inside the header widget area wrapping markup, before the Header Right widget area.
		 *
		 * @since 1.5.0
		 */
		do_action( 'genesis_header_right' );
		add_filter( 'wp_nav_menu_args', 'genesis_header_menu_args' );
		add_filter( 'wp_nav_menu', 'genesis_header_menu_wrap' );
		dynamic_sidebar( 'header-right' );
		remove_filter( 'wp_nav_menu_args', 'genesis_header_menu_args' );
		remove_filter( 'wp_nav_menu', 'genesis_header_menu_wrap' );

		genesis_markup(
			array(
				'close'   => '</div>',
				'context' => 'header-widget-area',
			)
		);

	}

}
