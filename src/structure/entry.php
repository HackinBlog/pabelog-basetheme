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

add_filter( 'genesis_author_box_gravatar_size', __NAMESPACE__ . '\setup_author_box_gravatar_size' );
/**
 * Modifies size of the Gravatar in the author box.
 *
 * @param int $size Original icon size.
 *
 * @return int Modified icon size.
 * @since 2.2.3
 *
 */
function setup_author_box_gravatar_size( $size ) {

	return 90;

}

add_filter( 'genesis_attr_entry-title', __NAMESPACE__ . '\child_attr_entry_title' );
/**
 * Add attributes for entry content.
 *
 * @since 1.0.1
 *
 * @param array $attributes Existing attributes.
 *
 * @return array Amended attributes.
 */
function child_attr_entry_title( $attributes ) {
	$attributes['class'] .= ' f2 f1-ns lh-title b black-70';
	return $attributes;
}

add_filter( 'genesis_attr_entry-content', __NAMESPACE__ . '\child_attr_entry_content' );
/**
 * Add attributes for entry content.
 *
 * @since 1.0.1
 *
 * @param array $attributes Existing attributes.
 *
 * @return array Amended attributes.
 */
function child_attr_entry_content( $attributes ) {
	$attributes['class'] .= ' pr0 pr7-l f4 lh-copy';
	return $attributes;
}