<?php

// include additional functions files:
require get_theme_file_path('/inc/search-route.php');

$roots_includes = array(
    '/functions/post-types.php',
  );
  
  foreach($roots_includes as $file){
    if(!$filepath = locate_template($file)) {
      trigger_error("Error locating `$file` for inclusion!", E_USER_ERROR);
    }
  
    require_once $filepath;
  }
  unset($file, $filepath);

  add_filter('acf/settings/remove_wp_meta_box', '__return_false');
//require get_template_directory() . '/inc/wdm-custom-nav-walker-functions.php';

function familyFood_custom_logo_setup() {
    $defaults = array(
        'height'               => 100,
        'width'                => 400,
        'flex-height'          => true,
        'flex-width'           => true,
        'header-text'          => array( 'site-title', 'site-description' ),
        'unlink-homepage-logo' => false, 
    );
 
    add_theme_support( 'custom-logo', $defaults );
}
add_action( 'after_setup_theme', 'familyFood_custom_logo_setup' );


function dynamic_custom_rest()
{
    register_rest_field('post', 'authorName', 'page', 'recipes', 'culture', 'tutorials', 'categories', array(
        'get_callback' => function () {return get_the_author();},
    ));
}

add_action('custom_rest_api', 'dynamic_custom_rest');


function add_theme_scripts() {
    wp_enqueue_style( 'main-style', get_stylesheet_uri() );
    wp_enqueue_script('main-recipeapi-js', get_theme_file_uri('/js/scripts-bundled.js'), null, '1.0', true);
    wp_enqueue_script('main-back-top-js', get_theme_file_uri('/js/modules/float-panel.js'), null, '1.0', true);
    wp_enqueue_style('font-awesome', '//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
    wp_localize_script('main-recipeapi-js', 'recipeapiData', array(
        'root_url' => get_site_url()
    ));
}
add_action( 'wp_enqueue_scripts', 'add_theme_scripts' );


function WPTime_add_title_to_theme(){
    add_theme_support( 'title-tag' ); // title for version 4.1 and higher
}
add_action( 'after_setup_theme', 'WPTime_add_title_to_theme' );

/**
 * WordPress blog/website title.
 *
 * @return string
 */
function site_title()
{
    return get_bloginfo('name');
}


/**
 * Add a sidebar.
 */
/**
 * Add a sidebar.
 */
function familyfood_theme_slug_widgets_init() {
    register_sidebar( array(
        'name'          => __( 'Main Sidebar', 'familyfood' ),
        'id'            => 'sidebar',
        'description'   => __( 'Widgets in this area will be shown on all posts and pages.', 'familyfood' ),
        'before_widget' => '<li id="%1$s" class="widget %2$s">',
        'after_widget'  => '</li>',
        'before_title'  => '<h3 class="widgettitle">',
        'after_title'   => '</h3>',
    ) );
}
add_action( 'widgets_init', 'familyfood_theme_slug_widgets_init' );

/*
Register menu
*/
function awesome_theme_setup() {  
    add_theme_support('menus');
register_nav_menu('primary', 'Primary Header Navigation');
register_nav_menu('secondary', 'Footer Navigation');
register_nav_menu('sidebar', 'sidebar');
}
add_action('after_setup_theme', 'awesome_theme_setup');


//@note - func custom_theme_setup
/* @custom theme support */
function custom_theme_setup(){
    add_theme_support('title-tag' );
    add_theme_support('html5' );
    add_theme_support('post-thumbnails');
    set_post_thumbnail_size( 150, 150);
    add_image_size( 'homepage-thumb',150, 150, true); //@true = hard cropped
}
// removes sticky class from post_class - was casuing issues with creating a sticky class
// in the wrong place
add_action( 'after_setup_theme', 'custom_theme_setup');

// r
add_filter( 'post_class', 'remove_hentry_function', 20 );
function remove_hentry_function( $classes ) {
	if( ( $key = array_search( 'sticky', $classes ) ) !== false )
		unset( $classes[$key] );
	return $classes;
}

function pagainate_link_function(){
    global $wp_query;
    echo paginate_links(array(
        'current'=>max(1,get_query_var('paged')),
        'total'=>$wp_query->max_num_pages,
        'type'=>'list', //default it will return anchor
    ));
}

function box_pagination() {

    $allowed_tags = [ 
        'span' => [
            'class' => [],
            'href' => [],
        ]
        ];

        $args = [
            'before_page_number' => '<span class="btn border boreder-secondary m2-2 mb-2">',
            'after_page_number' => '</span',
        ];
printf( '<nav class="box_pagination clearfix">%s</nav>', wp_kses( paginate_links( $args ), $allowed_tags ) );

}


