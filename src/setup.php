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

add_action( 'init', __NAMESPACE__ . '\setup_child_theme' );
/**
 * Setup genesis child theme, removes unwanted features
 *
 * @return void
 * @since 1.0.0
 */
function setup_child_theme() {

	genesis_sample_localization_setup();
	unregister_genesis_callbacks();
	adds_theme_supports();
	setup_gutenberg_support();
	register_new_image_sizes();
	add_filter( 'genesis_seo_title', __NAMESPACE__ . '\setup_header_title', 10, 3 );
	add_filter( 'genesis_pre_get_option_site_layout', '__genesis_return_full_width_content' );
}

add_filter( 'genesis_theme_settings_defaults', __NAMESPACE__ . '\set_theme_setting_defaults', 15 );
/**
 * Updates theme settings when resetting them at Genesis -> Theme Settings.
 *
 * Can be removed when Genesis Theme Settings are removed from WP admin.
 *
 * @param array $defaults Original theme settings defaults.
 *
 * @return array Modified defaults.
 * @since 1.0.0
 *
 */
function set_theme_setting_defaults( array $defaults ) {

	$args = array(
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
		'site_layout'               => 'content-sidebar'
	);

	return wp_parse_args( $args, $defaults );

}

add_filter( 'simple_social_default_styles', __NAMESPACE__ . '\setup_social_default_styles' );
/**
 * Set Simple Social Icon defaults.
 *
 * @param array $defaults Social style defaults.
 *
 * @return array Modified social style defaults.
 * @since 1.0.0
 *
 */
function setup_social_default_styles( array $defaults ) {

	$args = array(
		'alignment'              => 'alignleft',
		'background_color'       => '#f5f5f5',
		'background_color_hover' => '#333333',
		'border_radius'          => 3,
		'border_width'           => 0,
		'icon_color'             => '#333333',
		'icon_color_hover'       => '#ffffff',
		'size'                   => 40
	);

	return wp_parse_args( $args, $defaults );

}

/**
 * Unregister unwanted genesis callback
 *
 * @return void
 * @since 1.0.0
 */
function unregister_genesis_callbacks() {
	// Removes header right widget area.
	unregister_sidebar( 'header-right' );

	// Removes secondary sidebar.
	unregister_sidebar( 'sidebar-alt' );

	// Removes site layouts.
	genesis_unregister_layout( 'content-sidebar' );
	genesis_unregister_layout( 'sidebar-content' );
	genesis_unregister_layout( 'content-sidebar-sidebar' );
	genesis_unregister_layout( 'sidebar-content-sidebar' );
	genesis_unregister_layout( 'sidebar-sidebar-content' );
}

/**
 * Adds child theme supports for genesis
 *
 * @return void
 * @since 1.0.0
 */
function adds_theme_supports() {

	$default_config = array(
		'genesis-responsive-viewport'     => null,
		'genesis-after-entry-widget-area' => null,
		'genesis-footer-widgets'          => 3,
		'editor-styles'                   => null,
		'align-wide'                      => null,
		'responsive-embeds'               => null,
	);

	$config_files = array(
		'html5',
		'genesis-accessibility',
		'block-editor-settings',
		'custom_logo',
		'menus',
		'child_theme_settings',
		'genesis-structural-wraps',
	);

	foreach ( $config_files as $config_name ) {

		$default_config[ $config_name ] = genesis_get_config( $config_name );

	};

	foreach ( $default_config as $feature => $args ) {

		add_theme_support( $feature, $args );
	}
}


/**
 * Register new image size
 *
 * @return void
 * @since 1.0.0
 */
function register_new_image_sizes() {

	$config = genesis_get_config( 'images-size' );

	foreach ( $config as $name => $args ) {
		$crop = array_key_exists( 'crop', $args ) ? $args['crop'] : false;
		add_image_size( $name, $args['width'], $args['height'], $crop );
	}
}

/**
 * Sets localization (do not remove).
 *
 * @since 1.0.0
 */
function genesis_sample_localization_setup() {

	load_child_theme_textdomain( CHILD_TEXT_DOMAIN, CHILD_THEME_DIR . '/languages' );

}

/**
 * Adds Gutenberg opt-in features and styling.
 *
 * @since 2.7.0
 */
function setup_gutenberg_support() {
	// phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedFunctionFound -- using same in all child themes to allow action to be unhooked.
	add_editor_style( '/src/components/gutenberg/style-editor.css' );
}

/**
 * Removes the link from the hidden site title if a custom logo is in use.
 *
 * Without this filter, the site title is hidden with CSS when a custom logo
 * is in use, but the link it contains is still accessible by keyboard.
 *
 * @param string $title The full title.
 * @param string $inside The content inside the title element.
 * @param string $wrap The wrapping element name, such as h1.
 *
 * @return string The site title with anchor removed if a custom logo is active.
 * @since 1.2.0
 *
 */
function setup_header_title( $title, $inside, $wrap ) {

	if ( has_custom_logo() ) {
		$inside = get_bloginfo( 'name' );
	}

	return sprintf( '<%1$s class="site-title">%2$s</%1$s>', $wrap, $inside );

}