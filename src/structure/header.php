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


// Remove default genesis header
remove_action( 'genesis_header', 'genesis_do_header' );

add_action( 'genesis_header', __NAMESPACE__ . '\do_child_header' );
/**
 * Echo the child header, including the #title-area div, along with #title and #description, as well as the .widget-area.
 *
 * Does the `genesis_site_title`, `genesis_site_description` and `genesis_header_right` actions.
 *
 * @since 1.0.1
 *
 * @global $wp_registered_sidebars Holds all of the registered sidebars.
 */
function do_child_header() {

	$child_header_attrs = array(
		'class' => 'header-container flex justify-between-ns items-center',
	);

	genesis_markup(
		array(
			'open'    => sprintf( '<div %s>', genesis_attr( 'header-container', $child_header_attrs ) ),
			'context' => 'header-container'
		)
	);

	do_header_first();

	do_header_second();

	genesis_markup(
		array(
			'close'   => '</div>',
			'context' => 'header-container'
		)
	);

}

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

add_filter( 'genesis_attr_site-header', __NAMESPACE__ . '\child_header_attr');
/**
 *
 * Add additional attributes to child_header
 * @since 1.0.1
 * @return $attribute Array
 */
function child_header_attr( $attributes ) {
	$attributes['class'] .= ' bb bw3 b--gold';
	return $attributes;
}

/**
 *
 * Create Left header on Desktop or top one on Mobile
 *
 * @return void
 * @since 1.0.1
 */
function do_header_first() {

	$header_first_attrs = array(
		'class' => 'header-first flex items-center w-100 w-20-ns',
	);

	genesis_markup(
		array(
			'open'    => sprintf( '<div %s>', genesis_attr( 'header-first', $header_first_attrs ) ),
			'context' => 'header-first',
		)
	);

	do_child_main_menu();

	do_title_area();

	genesis_markup(
		array(
			'open'    => '</div>',
			'context' => 'header-first',
		)
	);

}

/**
 *
 * Create Right Header on Desktop or after top one on Mobile
 *
 * @return void
 * @since 1.0.1
 */
function do_header_second() {

	$header_second_attrs = array(
		'class' => 'header-second flex dn db-ns w-30-l',
	);

	genesis_markup(
		array(
			'open'    => sprintf( '<div %s>', genesis_attr( 'header-second', $header_second_attrs ) ),
			'context' => 'header-second',
		)
	);

	get_search_form();

	genesis_markup(
		array(
			'open'    => '</div>',
			'context' => 'header-second',
		)
	);

}

/**
 * Create title area
 *
 * @return void
 * @since 1.0.1
 */
function do_title_area() {

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
}

/**
 *
 * Create hamburger menu to the header
 *
 * @return  void
 * @since 1.0.1
 */
function do_child_main_menu() {

	$child_main_menu_attrs = array(
		'id'    => 'child_main_menu',
	);


	genesis_markup(
		array(
			'open'    => sprintf( '<div %s>', genesis_attr( 'child-main-menu', $child_main_menu_attrs ) ),
			'context' => 'child-main-menu',
		)
	);


	genesis_markup(
		array(
			'open'    => '</div>',
			'context' => 'child-main-menu',
		)
	);

}
