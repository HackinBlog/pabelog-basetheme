<?php
/**
 * Gutenberg theme support.
 *
 * @package Pabelog\Basetheme\Functions\Gutenberg
 * @since 1.0.0
 * @author Nadiar AS
 * @link https://www.pabelog.com
 * @license MIT
 */

namespace Pabelog\Basetheme\Functions\Gutenberg;

add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\enqueue_gutenberg_frontend_styles', 15 );
/**
 * Enqueues Gutenberg front-end styles.
 *
 * @since 1.0.0
 */
function enqueue_gutenberg_frontend_styles() {

	$prefix = CHILD_TEXT_DOMAIN;
	wp_enqueue_style(
		$prefix . '-gutenberg',
		CHILD_THEME_DIR . '/src/components/gutenberg/front-end.css',
		array( CHILD_TEXT_DOMAIN ),
		CHILD_THEME_VERSION
	);

}

add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\enqueue_block_editor_styles', 15 );
/**
 * Enqueues Gutenberg admin editor fonts and styles.
 *
 * @since 1.0.0
 */
function enqueue_block_editor_styles() {

	$prefix = CHILD_TEXT_DOMAIN;
	$block_editor_settings = genesis_get_config( 'block-editor-settings' );

	wp_enqueue_style(
		$prefix . '-gutenberg-fonts',
		$block_editor_settings['admin-fonts-url'],
		array(),
		CHILD_THEME_VERSION
	);

}

add_filter( 'body_class', __NAMESPACE__ . '\adds_blocks_body_classes' );
/**
 * Adds body classes to help with block styling.
 *
 * - `has-no-blocks` if content contains no blocks.
 * - `first-block-[block-name]` to allow changes based on the first block (such as removing padding above a Cover block).
 * - `first-block-align-[alignment]` to allow styling adjustment if the first block is wide or full-width.
 *
 * @param array $classes The original classes.
 *
 * @return array The modified classes.
 * @since 2.8.0
 *
 */
function adds_blocks_body_classes( $classes ) {

	if ( ! is_singular() || ! function_exists( 'has_blocks' ) || ! function_exists( 'parse_blocks' ) ) {
		return $classes;
	}

	if ( ! has_blocks() ) {
		$classes[] = 'has-no-blocks';

		return $classes;
	}

	$post_object = get_post( get_the_ID() );
	$blocks      = (array) parse_blocks( $post_object->post_content );

	if ( isset( $blocks[0]['blockName'] ) ) {
		$classes[] = 'first-block-' . str_replace( '/', '-', $blocks[0]['blockName'] );
	}

	if ( isset( $blocks[0]['attrs']['align'] ) ) {
		$classes[] = 'first-block-align-' . $blocks[0]['attrs']['align'];
	}

	return $classes;

}

require_once CHILD_THEME_DIR . '/src/components/gutenberg/inline-styles.php';

add_action( 'after_setup_theme', __NAMESPACE__ . '\setup_content_width', 15 );
/**
 * Set content width to match the “wide” Gutenberg block width.
 */
function setup_content_width() {

	$prefix = CHILD_TEXT_DOMAIN;

	$block_editor_settings = genesis_get_config( 'block-editor-settings' );

	// phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound -- See https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards/issues/924
	$GLOBALS['content_width'] = apply_filters( $prefix . '_content_width', $block_editor_settings['content-width'] );

}
