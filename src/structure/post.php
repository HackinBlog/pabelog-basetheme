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