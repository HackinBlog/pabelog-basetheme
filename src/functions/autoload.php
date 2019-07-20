<?php
/**
 * Description
 *
 * @package Pabelog\Basetheme\Functions
 * @since 1.0.0
 * @author Nadiar AS
 * @link https://www.pabelog.com
 * @license MIT
 */

namespace Pabelog\Basetheme\Functions;

add_action( 'admin_init', __NAMESPACE__ . '\load_admin_files' );
/**
 * Load admin files
 *
 * @return void
 * @since 1.0.0
 */
function load_admin_files() {

	$filenames = array(

	);

	load_specified_files( $filenames );

}

/**
 * Load non admin files
 *
 * @return  void
 * @since 1.0.0
 */
function load_non_admin_files() {

	$filenames = array(
		'/setup.php',
		'/components/customizer/css-handler.php',
		'/components/customizer/helper-functions.php',
		'/functions/formatting.php',
		'/functions/load-assets.php',
		'/functions/markup.php',
		'/functions/widgets.php',
		'/structure/archive.php',
		'/structure/comments.php',
		'/structure/footer.php',
		'/structure/header.php',
		'/structure/menu.php',
		'/structure/entry.php',
		'/structure/sidebar.php',
		'/components/customizer/customizer.php',
		'/components/gutenberg/init.php',
		'/paged.php',
		'/admin/theme-options.php',
	);

	load_specified_files( $filenames );
}

/**
 * Load each specified files.
 *
 * @param array $filenames
 * @param string $root_dir
 *
 * @since 1.0.0
 */

function load_specified_files( array $filenames, $root_dir = '' ) {

	$root_dir = $root_dir ?: CHILD_THEME_DIR . '/src';

	foreach ( $filenames as $filename ) {

		include( $root_dir . $filename );

	}

}

load_non_admin_files();