<?php
/**
 * Description
 *
 * @package Pabelog\Basetheme\Structure
 * @since 1.0.1
 * @author Nadiar AS
 * @link https://www.pabelog.com
 * @license MIT
 */
namespace Pabelog\Basetheme\Structure;

remove_action( 'genesis_footer', 'genesis_do_footer' );

add_action( 'genesis_footer', __NAMESPACE__ . '\do_child_footer' );
/**
 *
 * Custom genesis child footer
 *
 * @return void
 * @since 1.0.1
 *
 */
function do_child_footer() {


    echo '<div class="footer-container">';

        echo '<div class="footer-widgets"><div class="screen-container pa2">';

            child_footer_widget_1();

            child_footer_widget_2();

        echo '</div></div>';

        echo '<div class="footer-attribution">';

            footer_attribution();

        echo '</div>';

    echo '</div>';

}

/**
 *
 * Footer widget 1.
 *
 * @return void
 * @since 1.0.1
 *
 */
function child_footer_widget_1() {

	if ( is_active_sidebar( 'footer-widget-1' ) ) {

		genesis_widget_area( 'footer-widget-1', array(
			'before' => '<div class="footer-widget-1">',
			'after'  => '</div>',
		) );

	}

}

/**
 *
 * Footer widget 2.
 *
 * @return void
 * @since 1.0.1
 *
 */
function child_footer_widget_2() {

	if ( is_active_sidebar( 'footer-widget-2' ) ) {

		genesis_widget_area( 'footer-widget-2', array(
			'before' => '<div class="footer-widget-2">',
			'after'  => '</div>',
		) );

	}

}

/**
 *
 * Footer copyright and attribution.
 *
 * @return void
 * @since 1.0.1
 *
 */
function footer_attribution() {

	?>

	<nav class="footer-att-menu">
		<div class="screen-container pa2">
			<div>Logo</div>
			<div>
				<div>
					<span>Copyright ...</span>
				</div>
				<div>
					<ul>
						<li>Footer Menu ...</li>
					</ul>
				</div>
			</div>
		</div>
	</nav>

	<?php

}