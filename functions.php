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

// Starts the genesis.
require_once get_template_directory() . '/lib/init.php';

include_once( __DIR__ . '/src/init.php' );

include_once( __DIR__ . '/src/functions/autoload.php' );

include_once( __DIR__ . '/src/setup.php');

add_filter( 'jetpack_implode_frontend_css', '__return_false' );