<?php




add_action('rest_api_init', 'dynamicRegisterSearch');

function dynamicRegisterSearch()
{
    register_rest_route('dynamic/v1', 'search', array(
        'methods'  => WP_REST_SERVER::READABLE,
        'callback' => 'SearchResults',
        'permission_callback' => '__return_true',
    ));
    
 //   wp_reset_postdata();
}

function SearchResults($data) {
    // query a specific term from data input for the search
    $mainQuery = new WP_Query(array(
        'post_type' => array('recipes', 'post', 'page', 'culture', 'tutorials', ),
        's' => sanitize_text_field($data['term']),
    ));

    $results = array(
        'recipesget'      => array(),
        'generalInfo'     => array(),
        'culturesget'     => array(),
        'tutorialsget'    => array(),
    );

    while ($mainQuery->have_posts()) {
           $mainQuery->the_post();

           if (get_post_type() == 'post' or get_post_type() == 'page') {
            array_push($results['generalInfo'], array(
                'title' => get_the_title(),
                'permalink' => get_the_permalink(),
                'postType' => get_post_type(),
                'authorName' => get_author_name(),
            ));
        }


        if (get_post_type() == 'recipes') {
            array_push($results['recipesget'], array(
                'title' => get_the_title(),
                'permalink' => get_the_permalink(),
                'postType' => get_post_type(),
                'authorName' => get_author_name(),
                'image' => get_the_post_thumbnail_url(0, 'recipeLandscape'),
            ));
        }


        if (get_post_type() == 'culture') {
            array_push($results['culturesget'], array(
                'title' => get_the_title(),
                'permalink' => get_the_permalink(),          
            ));
        }


        if (get_post_type() == 'tutorials') {
            array_push($results['tutorialsget'], array(
                'title' => get_the_title(),
                'permalink' => get_the_permalink(),
            ));
        }
 
    }

    return $results;
}