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


/*
 * ================
 * STRUCTURES\MENU
 * ================
 */

// Removes output of primary navigation right extras.
remove_filter( 'genesis_nav_items', 'genesis_nav_right', 10, 2 );
remove_filter( 'wp_nav_menu_items', 'genesis_nav_right', 10, 2 );


// Repositions primary navigation menu.
// remove_action( 'genesis_after_header', 'genesis_do_nav' );
// add_action( 'genesis_header', 'genesis_do_nav', 12 );

// Repositions the secondary navigation menu.
// remove_action( 'genesis_after_header', 'genesis_do_subnav' );
// add_action( 'genesis_footer', 'genesis_do_subnav', 10 );

add_filter( 'wp_nav_menu_args', __NAMESPACE__ . '\setup_secondary_menu_args' );
/**
 * Reduces secondary navigation menu to one level depth.
 *
 * @param array $args Original menu options.
 *
 * @return array Menu options with depth set to 1.
 * @since 2.2.3
 *
 */
function setup_secondary_menu_args( array $args ) {

	if ( 'secondary' !== $args['theme_location'] ) {
		return $args;
	}

	$args['depth'] = 1;

	return $args;

}
