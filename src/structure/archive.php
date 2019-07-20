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

add_filter( 'genesis_attr_content', __NAMESPACE__ . '\child_attr_content' );
/**
 * Add attributes for primary sidebar element.
 *
 * @since 1.0.1
 *
 * @param array $attributes Existing attributes.
 *
 * @return array Amended attributes.
 */
function child_attr_content( $attributes ) {
	$attributes['class'] .= ' pa4';
	return $attributes;
}
