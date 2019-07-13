<?php
/**
 * Description
 *
 * @package Pabelog\Basetheme\FrontPage
 * @since 1.0.0
 * @author Nadiar AS
 * @link https://www.pabelog.com
 * @license MIT
 */

namespace Pabelog\Basetheme\Home;

use WP_Query;

if ( is_paged() ) {

	genesis();

} else {

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

}

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
			'open'    => sprintf( '<section %s>', genesis_attr( 'main-content', array(
				'class' => 'main-content ph3 ph0-ns'
			) ) ),
			'context' => 'main-content',
		)
	);

	echo '<div class="screen-container">';

	$main_contents_by_category = array(
		'red'    => '6',
		'green'  => '7',
		'blue'   => '8',
		'yellow' => '9',
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

		z_taxonomy_image( $home_category['id'], 'Medium Square', array(
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
			'open'    => sprintf( '<div %s>', genesis_attr( $home_category['context'] . '-box-title', array(
				'class' => 'flex mb3 justify-center' . ' bg-line-' . $home_category['color'],
			) ) ),
			'context' => $home_category['context'] . '-box-title',
		)
	);

	genesis_markup(
		array(
			'open'    => sprintf( '<a %s>', genesis_attr( $home_category['context'] . '-title', array(
				'title' => 'All posts with category ' . $home_category['label'],
				'href'  => $home_category['url'],
				'class' => 'home-cat-link', // 'underline-' . $home_category['color'],
			) ) ),
			'context' => $home_category['context'] . '-title',
		)
	);

	echo '<h2 class="post-category-title mh2 tc fw6 dark-gray underline-' . $home_category['color'] . '">' . $home_category['label'] . '</h2>';

	genesis_markup(
		array(
			'close'   => '</a>',
			'context' => $home_category['context'] . '-title',
		)
	);

	genesis_markup(
		array(
			'close'   => '</div>',
			'context' => $home_category['context'] . '-box-title',
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

		echo "<li class='post-entry post-entry-$unique_post_ctx bb b--light-gray'>";


		if ( has_post_thumbnail( $post->ID ) && $first_post_home->ID == $post->ID ) {

			echo get_the_post_thumbnail( $post, 'Medium Rectangle', array(
				'class' => 'ba b--light-gray br2 mb3',
			) );

			if ( $home_post_tags ) {

				echo '<h2 class="f3 fw6 lh-title mt3 mb0">';
				echo_post_link( $anchor_synamic_ctx, $post, array(
					'class' => 'dark-gray hover-link-1 no-underline'
				) );
				echo '</h2>';

				echo_post_tag( $home_post_tags );

			} else {

				echo '<h2 class="dark-gray f3 fw6 lh-title hover-link-1 mt3 mb3">';
				echo_post_link( $anchor_synamic_ctx, $post, array(
					'class' => 'dark-gray hover-link-1 no-underline'
				) );
				echo '</h2>';

			}


		} else {

			if ( $home_post_tags ) {

				echo '<h2 class="dark-gray f4 fw5 lh-title hover-link-1 mt3 mb0">';
				echo_post_link( $anchor_synamic_ctx, $post, array(
					'class' => 'dark-gray hover-link-1 no-underline'
				) );
				echo '</h2>';

				echo_post_tag( $home_post_tags );

			} else {

				echo '<h2 class="dark-gray f4 fw5 lh-title hover-link-1 mt3 mb3">';
				echo_post_link( $anchor_synamic_ctx, $post, array(
					'class' => 'dark-gray hover-link-1 no-underline'
				) );
				echo '</h2>';

			}

		}


		echo '</li>';

	} ?>

    <li>
        <div class="mt3">
            <a href="<?php echo $home_category['url']; ?>"
               title="<?php echo $home_category['label']; ?>"
               class="dark-gray f5 lh-title no-underline hover-link-1">
                <span>Semua di <b><?php echo $home_category['label']; ?></b> <i class="icon-arrow-right gold"></i></span>
            </a>
        </div>
    </li>

	<?php

	echo '</ul>';

}

function echo_post_link( $context, $post, $attributes = array() ) {

	$attributes['href']  = get_permalink( $post->ID );
	$attributes['title'] = $post->post_title;
	$attributes['class'] .= " $context";

	genesis_markup(
		array(
			'open'    => sprintf( '<a %s>', genesis_attr( $context, $attributes ) ),
			'context' => $context,
		)
	);

	echo $post->post_title;

	genesis_markup(
		array(
			'close'   => '</a>',
			'context' => $context,
		)
	);

}

function echo_post_tag( $home_tags = array() ) {

	echo '<div class="term-tags mb3">';

	foreach ( $home_tags as $tag ) {

		echo '<span class="f7 bg-light-gray ba b--light-gray br3 ph2 lh-solid mr2">';

		?>

        <a href="<?php echo get_tag_link( $tag->term_id ); ?>"
           class="no-underline gray hover-link-2"
           title="Semua post dengan tag <?php echo $tag->name; ?>"><?php echo $tag->name; ?>
        </a>

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
			'open'    => sprintf( '<section %s>', genesis_attr( 'secondary-content', array(
				'class' => 'secondary-content ph3 ph0-ns'
			) ) ),
			'context' => 'secondary-content',
		)
	);

	echo '<div class="screen-container ph2 pt4">';

	secondary_content_title( "Masih Hangat dari Oven" );

	echo '<div class="flex flex-column flex-row-ns mt4">';

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

    <div class="lh-title fw7 f3 tc">
        <span class="underline-yellow"><?php echo $title; ?></span>
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

				$mb = ( $tags ) ? 'mb0' : 'mb3';

				?>

                <div class="entry-title w-100 w-50-ns">
                    <div class="bb b--light-gray mr3-ns">
                        <h2 class="f3 fw6 lh-title <?php echo $mb; ?>">
                            <a href="<?php the_permalink(); ?>"
                               title="<?php the_title(); ?>"
                               class="dark-gray hover-link-1"
                            >
								<?php the_title(); ?>
                            </a>
                        </h2>
                        <div class="entry-meta f5">
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

    <div class="featured-content w-100 flex flex-column flex-row-ns mb2 mb4-ns">
        <div class="entry-image w-100 w-50-ns mr3-ns">

			<?php


			echo get_the_post_thumbnail( $post_id, 'Medium Rectangle', array(
				'class' => 'ba b--light-gray br2',
			) );


			?>

        </div>
        <div class="entry-text w-100 w-50-ns mh2-ns">
            <div class="entry-title">
                <h2 class="fw7 f2 lh-title">
                    <a href="<?php the_permalink(); ?>"
                       title="<?php the_title(); ?>"
                       class="dark-gray hover-link-1">
						<?php the_title(); ?>
                    </a>
                </h2>
                <div class="entry-meta f6 gray fw5">
					<?php // if ( $tags ) { echo_post_tag( $tags ); } ?>
                    <div class="last-updated">
                        <span>Last Updated: <?php the_modified_date(); ?></span>
                    </div>
                </div>
            </div>

            <div class="entry-excerpt lh-copy">
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
