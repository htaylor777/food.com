<?php wp_head(); 
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"> 
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/> 
    <meta name="viewport" content="initial-scale=1, maximum-scale=1"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
    <title><?php echo get_bloginfo( 'name' );?></title>
    <meta name="description" content="By the help of flex display property, We can easily sticky the fotoer at bottom of page, no matter how much content you have on page." />
    <meta name="author" content="recipes" />
   
</head>
<body class="Site">		
<div class="navigation-check sticky"> 
  <div class="site-header__util"> 
  <span class="search-trigger js-search-trigger">
<i class="fa fa-search" aria-hidden="true"></i>Search</span> 

  </div>     
<div class="col-rt-2">     
   
<?php
        wp_nav_menu( array( 
		    'theme_location'   => 'primary', 
	      'container_class'  => '', 
	      'menu_class'       => '',		 
		   ) );
    ?>           
    </div>
  

<header class="ScriptHeader">
    <!-- div class="top-container" -->
    	<div class="col-rt-12">  
           <a href="<?php echo esc_url( home_url( '/' ) );?>"> <p class="mobile-logo"></p></a>     
           <div class="rt-heading">
         	
            <?php
	// 	$custom_logo_id = get_theme_mod( 'custom_logo' );
     //   $logo = wp_get_attachment_image_src( $custom_logo_id , 'full' ); 
if ( has_custom_logo() ) {
       
       echo '<a href="'. esc_url( home_url( '/' ) ).'"><p class="page-logo"></p></a>';
} else {
        echo '<h1 class="site-title">'. get_bloginfo( 'name' ) .'</h1>';
		echo '<h2 class="site-description"><?php bloginfo( "description" ); ?></h2>';
}
?>       
       </div>
        </div>
</div>
    <!-- /div -->
</header>
</div>
<div id="backtop">&#9650;</div>
