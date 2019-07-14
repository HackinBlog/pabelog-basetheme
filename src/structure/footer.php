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

	echo '<div class="footer-widgets pa3 pa0-l"><div class="screen-container ph2 pt3 pb4 flex flex-column flex-row-l">';

	child_footer_widget_1();

	child_footer_widget_2();

	echo '</div></div>';

	echo '<div class="footer-attribution pa3 pa0-l">';

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
			'before' => '<div class="footer-widget-1 w-100 w-40-l mr0 mr6-l">',
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
			'before' => '<div class="footer-widget-2 w-100 w-60-l pt0 pt5-ns">',
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
        <div class="screen-container flex flex-column flex-row-ns pa2 items-center">
            <div class="mr0 mr3-ns mb3 mb0-ns tc tl-ns"><b>Logo Goes Here</b></div>
            <div class="f5 lh-copy">
                <span class="db di-ns tc tl-ns">&copy; Copyright <?php echo date( "Y" ); ?> <a href="/" class="fw5 black no-underline">ClupClup.com</a> </span>
                <span class="dn di-ns">|</span>
                <span class="db di-ns tc tl-ns">
                    <em>Made with <i class="icon-heart red"></i> in Jakarta</em>
                </span>
            </div>
        </div>
    </nav>

	<?php

}

add_action( 'genesis_after_footer', __NAMESPACE__ . '\inject_footer_scripts' );
/**
 *
 * Inject script after closing body tag
 *
 * @return void
 * @since 1.0.1
 */
function inject_footer_scripts() {

	?>

        <script type="application/javascript" src="<?php echo CHILD_THEME_URI; ?>/assets/js/cljs/cljs-base.js"></script>
        <script type="application/javascript" src="<?php echo CHILD_THEME_URI; ?>/assets/js/cljs/hamburger-menu.js"></script>
        <script type="application/javascript" src="<?php echo CHILD_THEME_URI; ?>/assets/js/cljs/footer-subscription-form.js"></script>
        <script type="application/javascript">
            com.clupclup.app_script.modules.hamburger_menu.render();
            com.clupclup.app_script.modules.footer_subscription_form.render();
        </script>

	<?php

    if ( is_front_page() ) {

        ?>

        <script type="application/javascript" src="<?php echo CHILD_THEME_URI; ?>/assets/js/cljs/home-subscription-form.js"></script>
        <script type="application/javascript">
            com.clupclup.app_script.modules.home_subscription_form.render();
        </script>

        <?php

    }

}