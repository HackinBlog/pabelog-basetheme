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

genesis_register_sidebar( array(
	'id'          => 'home-page-widget-1',
	'name'        => __( 'Homepage Email Widget', CHILD_TEXT_DOMAIN ),
	'description' => __( 'This is a widget that goes on the front page.', CHILD_TEXT_DOMAIN ),
) );

genesis_register_sidebar( array(
	'id'          => 'home-page-widget-2',
	'name'        => __( 'Homepage Banner Widget', CHILD_TEXT_DOMAIN ),
	'description' => __( 'Secondary widget to display banner', CHILD_TEXT_DOMAIN ),
) );