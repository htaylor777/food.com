<?php



function recipes_adjust_queries($query){
if(!is_admin() AND is_post_type_archive('recipes') AND $query->is_main_query() ) {
    $query->set('orderby', 'title');
    $query->set('order', 'ASC');
    $query->set('posts_per_page', 15);
  }

  if(!is_admin() AND is_post_type_archive('cultures') AND $query->is_main_query() ) {
    $query->set('orderby', 'title');
    $query->set('order', 'ASC');
    $query->set('posts_per_page', 15);
  }

  if(!is_admin() AND is_post_type_archive('categories') AND $query->is_main_query() ) {
    $query->set('orderby', 'title');
    $query->set('order', 'ASC');
    $query->set('posts_per_page', 15);
  }
}
add_action('pre_get_posts', 'recipes_adjust_queries');

function recipe_api_posts(){
    // custom post types  
    register_post_type('recipes', array(
        'show_in_rest' => true,
        'supports' => array('title','editor','excerpt','thumbnail','comments','author','published'), 
        'rewrite' => array('slug' => 'recipes'),
        'taxonomies'  => array( 'category','post_tag' ),
        'has_archive' => true,
        'public' => true,
        'posts_per_page' => 10, 
        'labels' => array(
        'name'   => 'Recipes',
        'add_new_item' => 'Add New Recipe',
         'edit_item' => 'Edit Recipe',
         'all_items' => 'All Recipes',  
         'singular_name' => 'Recipes'
        ),
        'menu_icon' => 'dashicons-food'
    ));
    
    
   
    register_post_type('culture', array(
        'show_in_rest' => true,
        'rewrite'      => array( 'slug' => 'culture' ),
        'supports' => array('title','editor','excerpt','thumbnail', 'comments','author','published'), 
        'has_archive' => true,
        'public' => true,
        'labels' => array(
        'name'   => 'Culture',
        'add_new_item' => 'Add New Culture',
         'edit_item' => 'Edit Culture',
         'all_items' => 'All Cultures',  
         'singular_name' => 'Culture'
        ),
        'menu_icon' => 'dashicons-admin-users'
    ));
    


register_post_type('tutorials', array(
        'show_in_rest' => true,
        'supports' => array('title','editor','excerpt','thumbnail','comments','author','published'),
        'rewrite' => array('slug' => 'tutorials'),
        'has_archive' => true,
        'public' => true,
        'labels' => array(
            'name'   => 'Tutorials',
            'add_new_item' => 'Add New Tutorial',
            'edit_item' => 'Edit Tutorial',
            'all_items' => 'All Tutorials',
            'singular_name' => 'Tutorial'
        ),
        'menu_icon' => 'dashicons-welcome-learn-more'
    ));
    
}
    

function recipe_api_features() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_image_size('recipeThumbnail', 100, 100, false);
    add_image_size('recipeLandscape', 200, 200, false);
    add_image_size('recipePortrait', 300, 300, false);
    add_image_size('pageBanner', 1500, 350, true);
    
}


function my_rewrite_flush() {
    flush_rewrite_rules();
}


function my_cptui_add_post_types_to_archives( $query ) {
	// We do not want unintended consequences.
	if ( is_admin() || ! $query->is_main_query() ) {
		return;    
	}

	if ( is_category() || is_tag() && empty( $query->query_vars['suppress_filters'] ) ) {

		// Replace these slugs with the post types you want to include.
		$cptui_post_types = array( 'recipes', 'culture', 'tutorials');

		$query->set(
	  		'post_type',
			array_merge(
				array( 'post' ),
				$cptui_post_types
			)
		);
	}
}
add_filter( 'pre_get_posts', 'my_cptui_add_post_types_to_archives' );
add_action('after_setup_theme', 'recipe_api_features');
add_action('init', 'recipe_api_posts');
add_action( 'after_switch_theme', 'my_rewrite_flush' );