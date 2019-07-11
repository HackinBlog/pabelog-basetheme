<?php
/**
 * Description
 *
 * @package Pabelog\Basetheme\Home
 * @since 1.0.0
 * @author Nadiar AS
 * @link https://www.pabelog.com
 * @license MIT
 */

namespace Pabelog\Basetheme\Home;

use WP_Query;

get_header();

do_action( 'genesis_before_content_sidebar_wrap' );

do_main_content();

do_secondary_content();

/**
 * Fires before the footer, after the content sidebar wrap.
 *
 * @since 1.0.0
 */
do_action( 'genesis_after_content_sidebar_wrap' );

get_footer();

//genesis();

/**
 *
 * Top one content on the home page
 * Each content boxed by category
 *
 * @return void
 * @since 1.0.1
 */
function do_main_content() {

	genesis_markup(
		array(
			'open'    => '<section %s>',
			'context' => 'main-content',
		)
	);

	echo '<div class="screen-container">';

	$main_contents_by_category = array(
		'red'   => '1',
		'green' => '5',
		'blue'  => '3',
		'grey'  => '4',
	);

	echo '<ul class="contents flex flex-column flex-row-ns">';

	foreach ( $main_contents_by_category as $category_color => $category_id ) {
		content_by_category_component( $category_id, $category_color );
	}

	echo '</ul>';

	echo '</div>';

	home_page_widget_1();

	genesis_markup(
		array(
			'close'   => '</section>',
			'context' => 'main-content',
		)
	);

}

function content_by_category_component( $category_id, $category_color = 'white' ) {

	$args      = array(
		'post_type'      => 'post',
		'post_status'    => 'publish',
		'cat'            => $category_id,
		'posts_per_page' => 5,
	);
	$arr_posts = new WP_Query( $args );

	if ( $arr_posts->have_posts() ) {


		$home_category = array(
			'id'      => $category_id,
			'url'     => get_category_link( $category_id ),
			'context' => 'home-category-ctx-' . get_cat_name( $category_id ),
			'label'   => get_cat_name( $category_id ),
			'color'   => $category_color,
		);

		echo '<li class="contant-category">';

		home_category_image( $home_category );

		echo '<div class="entries-box ba b--moon-gray bg-white relative ma2 pa3">';

		home_category_text( $home_category );

		home_posts_box( $arr_posts, $home_category );

		echo '</div>';

		echo '</li>';

	}

	do_action( 'home_widget' );

}

function home_category_image( $home_category ) {

	if ( function_exists( 'z_taxonomy_image' ) ) {

		genesis_markup(
			array(
				'open'    => sprintf( '<a %s>', genesis_attr( $home_category['context'], array(
					'title' => 'All posts with category ' . $home_category['label'],
					'href'  => $home_category['url'],
				) ) ),
				'context' => $home_category['context'],
			)
		);

		z_taxonomy_image( $home_category['id'], 'medium_large', array(
			'class' => 'w-100 pa3 relative'
		) );

		genesis_markup(
			array(
				'open'    => '</a>',
				'context' => $home_category['context'],
			)
		);
	}

}

function home_category_text( $home_category ) {

	genesis_markup(
		array(
			'open'    => sprintf( '<a %s>', genesis_attr( $home_category['context'], array(
				'title' => 'All posts with category ' . $home_category['label'],
				'href'  => $home_category['url'],
				'class' => 'underline-' . $home_category['color'],
			) ) ),
			'context' => $home_category['context'] . '-title',
		)
	);

	echo '<h2 class="post-category-title mh2 tc underline-' . $home_category['color'] . '">' . $home_category['label'] . '</h2>';

	genesis_markup(
		array(
			'open'    => '</a>',
			'context' => $home_category['context'] . '-title',
		)
	);

}

function home_posts_box( $arr_posts, $home_category ) {

	$first_post_home = $arr_posts->posts[0];

	echo '<ul class="post-entries">';

	foreach ( $arr_posts->posts as $post ) {

		$home_post_tags = get_the_tags( $post->ID );

		$unique_post_ctx = $post->ID . '-cat-' . $home_category['id'];

		$anchor_synamic_ctx = 'title-' . $unique_post_ctx;

		echo "<li class='post-entry post-entry-$unique_post_ctx bb'>";

		genesis_markup(
			array(
				'open'    => sprintf( '<a %s>', genesis_attr( $anchor_synamic_ctx, array(
					'title' => $post->post_title,
					'href'  => get_permalink( $post->ID )
				) ) ),
				'context' => $anchor_synamic_ctx,
			)
		);


		if ( has_post_thumbnail( $post->ID ) && $first_post_home->ID == $post->ID ) {
			echo get_the_post_thumbnail( $post, 'medium_rectangle', array(
				'class' => 'ba b--light-gray br2',
			) );
		}

		echo '<h2>' . $post->post_title . '</h2>';

		genesis_markup(
			array(
				'open'    => '</a>',
				'context' => $anchor_synamic_ctx,
			)
		);

		if ( $home_post_tags ) {
			echo_post_tag( $home_post_tags );
		}

		echo '</li>';

	} ?>

    <li>
        <a href="<?php echo $home_category['url']; ?>" title="<?php echo $home_category['label']; ?>">
            <span>Semua <?php echo $home_category['label']; ?> <i class="icon-arrow-right"></i></span>
        </a>
    </li>

	<?php

	echo '</ul>';

}

function echo_post_tag( $home_tags = array() ) {

	echo '<div class="term-tags">Tags: ';

	foreach ( $home_tags as $tag ) {

		echo '<span>';

		?>

        <a href="<?php echo get_tag_link( $tag->term_id ); ?>"
           title="Semua post dengan tag <?php echo $tag->name; ?>"><?php echo $tag->name; ?></a>

		<?php

		echo '</span>';

	}

	echo '</div>';

}

/**
 *
 * Second one content on the home page
 * First featured content, then the loop
 *
 * @return void
 *
 * @since 1.0.1
 */
function do_secondary_content() {

	genesis_markup(
		array(
			'open'    => '<section %s>',
			'context' => 'secondary-content',
		)
	);

	echo '<div class="screen-container pa2">';

        secondary_content_title( "Masih Hangat dari Oven" );

        echo '<div class="flex flex-column flex-row-ns">';

        post_content_loop();

        home_page_widget_2();

        echo '</div>';

    echo '</div>';

	genesis_markup(
		array(
			'open'    => '</section>',
			'context' => 'secondary-content',
		)
	);

}

function secondary_content_title( $title ) {

	?>

    <div class="lh-title fw5 f3 tc">
        <span><?php echo $title; ?></span>
    </div>

	<?php

}

function post_content_loop() {

	echo '<div class="post-content-loop flex flex-wrap w-100 w-75-l">';

	if ( have_posts() ) {

		do_action( 'genesis_before_while' );

		while ( have_posts() ) : the_post();

			$post_id = get_the_ID();

			$tags = get_the_tags( $post_id );

			if ( is_sticky( $post_id ) ) {

				featured_content_loop( $post_id );

			} else {

				?>

                <div class="entry-title w-50">
                    <div class="bb mr3-ns">
                        <a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>">
                            <h2><?php the_title(); ?></h2>
                        </a>
                        <div class="entry-meta">
		                    <?php if ( $tags ) {
			                    echo_post_tag( $tags );
		                    } ?>
                        </div>
                    </div>
                </div>

				<?php

			}

		endwhile;

		do_action( 'genesis_after_endwhile' );

	} else {

		do_action( 'genesis_loop_else' );

	}

	echo '</div>';

}

function featured_content_loop( $post_id ) {

	$tags = get_the_tags( $post_id );

	?>

    <div class="featured-content w-100 flex flex-column flex-row-ns">
        <div class="entry-image w-100 w-50-ns mr3-ns">

			<?php


			echo get_the_post_thumbnail( $post_id, 'medium_rectangle', array(
				'class' => 'ba b--light-gray br2',
			) );


			?>

        </div>
        <div class="entry-text w-100 w-50-ns mh2-ns">
            <div class="entry-title">
                <a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>">
                    <h2><?php the_title(); ?></h2>
                </a>
                <div class="entry-meta">
                    <?php if ( $tags ) {
	                    echo_post_tag( $tags );
                    } ?>
                    <div class="last-updated">
                        <span>Last Updated: <?php the_modified_date(); ?></span>
                    </div>
                </div>
            </div>

            <div class="entry-excerpt">
                <?php the_excerpt(); ?>
            </div>
        </div>
    </div>

	<?php
}

function home_page_widget_1() {

	if ( is_active_sidebar( 'home-page-widget-1' ) ) {

		genesis_widget_area( 'home-page-widget-1', array(
			'before' => '<div class="home-page-widget-1 screen-container pa2">',
			'after'  => '</div>',
		) );

	}

}

function home_page_widget_2() {

	if ( is_active_sidebar( 'home-page-widget-2' ) ) {

		genesis_widget_area( 'home-page-widget-2', array(
			'before' => '<div class="home-page-widget-2 w-100 w-25-l ma0 ml3-ns tc tr-l">',
			'after'  => '</div>',
		) );

	}

}