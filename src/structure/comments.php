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

add_filter( 'genesis_comment_list_args', __NAMESPACE__ . '\setup_comments_gravatar' );
/**
 * Modifies size of the Gravatar in the entry comments.
 *
 * @param array $args Gravatar settings.
 *
 * @return array Gravatar settings with modified size.
 * @since 2.2.3
 *
 */
function setup_comments_gravatar( array $args ) {

	$args['avatar_size'] = 60;

	return $args;

}
