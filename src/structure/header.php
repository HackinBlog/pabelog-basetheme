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
