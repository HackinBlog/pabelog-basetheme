<?php
/**
 * This file adds the Customizer additions.
 *
 * @package Pabelog\Basetheme\Functions\Customizer
 * @since 1.0.0
 * @author Nadiar AS
 * @link https://www.pabelog.com
 * @license MIT
 */

namespace Pabelog\Basetheme\Functions\Customizer;

use WP_Customize_Color_Control;

add_action( 'customize_register', __NAMESPACE__ . '\register_with_customizer' );
/**
 * Registers settings and controls with the Customizer.
 *
 * @param WP_Customize_Manager $wp_customize Customizer object.
 *
 * @since 1.0.0
 *
 */
function register_with_customizer( $wp_customize ) {

	$prefix = CHILD_TEXT_DOMAIN;

	$wp_customize->add_setting(
		$prefix . '_link_color',
		array(
			'default'           => get_default_link_color(),
			'sanitize_callback' => 'sanitize_hex_color',
		)
	);

	$wp_customize->add_control(
		new WP_Customize_Color_Control(
			$wp_customize,
			$prefix . '_link_color',
			array(
				'description' => __( 'Change the color of post info links and button blocks, the hover color of linked titles and menu items, and more.', CHILD_TEXT_DOMAIN ),
				'label'       => __( 'Link Color', CHILD_TEXT_DOMAIN ),
				'section'     => 'colors',
				'settings'    => $prefix . '_link_color',
			)
		)
	);

	$wp_customize->add_setting(
		$prefix . 'accent_color',
		array(
			'default'           => get_default_link_color(),
			'sanitize_callback' => 'sanitize_hex_color',
		)
	);

	$wp_customize->add_control(
		new WP_Customize_Color_Control(
			$wp_customize,
			$prefix . 'accent_color',
			array(
				'description' => __( 'Change the default hover color for button links, menu buttons, and submit buttons. The button block uses the Link Color.', CHILD_TEXT_DOMAIN ),
				'label'       => __( 'Accent Color', CHILD_TEXT_DOMAIN ),
				'section'     => 'colors',
				'settings'    => $prefix . '_accent_color',
			)
		)
	);

	$wp_customize->add_setting(
		$prefix . '_logo_width',
		array(
			'default'           => 350,
			'sanitize_callback' => 'absint',
		)
	);

	// Add a control for the logo size.
	$wp_customize->add_control(
		$prefix . '_logo_width',
		array(
			'label'       => __( 'Logo Width', CHILD_TEXT_DOMAIN ),
			'description' => __( 'The maximum width of the logo in pixels.', CHILD_TEXT_DOMAIN ),
			'priority'    => 9,
			'section'     => 'title_tagline',
			'settings'    => $prefix . '_logo_width',
			'type'        => 'number',
			'input_attrs' => array(
				'min' => 100,
			),

		)
	);

}
