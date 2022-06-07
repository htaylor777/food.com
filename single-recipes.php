<?php
get_header();
?>
<main class="site-content">
<aside class="sidenav"><?php dynamic_sidebar('sidebar'); ?> </aside>  
    <div class="left-container">
<!-- Start of single recipe page -->
<section class="fp-images"> 

<?php
//get the custom_post fields to display:
     $rc_image       = get_field('recipe_picture');
     $rc_time        = get_field('time_to_make');
     $rc_difficulty  = get_field('difficulty');
     $rc_name        = get_field('recipe_name');
     $rc_ingredients = get_field('recipe_ingredients');
     $rc_directions  = get_field('recipe_directions');
     $rc_nutrition   = get_field('recipe_nutrition');
     $rc_link        = get_field('website_link');

if (is_single()) { ?>
<h2 class="center-text"><?php echo $rc_name; ?></h2>
<p class="center-image center-text"> 
    <?php the_post_thumbnail('recipePortrait'); ?> </p>

<?php if (isset($rc_link)) {?>
<p class="center-text"><?php echo  "<a href='". $rc_link ."' target='_blank'>Website Source</a>"; ?></p>
<?php } ?>

<p class="center-text"><?php echo  the_author(); ?> </p>
<p class="center-text"><?php echo  the_tags(); ?> </p>
<p class="center-text"><?php echo  the_category(); ?> </p>


<p class="center-text"><?php echo "Time to make:&nbsp;". $rc_time; ?></p> 
<hr/>
<p class="center-text"><?php echo "Difficulty Level:&nbsp;".$rc_difficulty; ?></p> 
<hr/>
<h3 class="center-text">Ingredients</h3>
<p class="fp-bottom-text flex-wrap"><?php echo $rc_ingredients; ?></p>   
<hr/>
<h3 class="center-text">Directions </h3>
<p class="fp-bottom-text flex-wrap"><?php echo $rc_directions; ?></p> 
<hr/>
<h3 class="center-text"> Nutrition Information:</h3>
<p class="fp-bottom-text flex-wrap"><?php echo $rc_nutrition; ?></p>    
<?php } 
  
     $relatedcultures = get_field('relationships');
 if ($relatedcultures = get_field('relationships') ){ ?>
  <h2 class="center-text">Culture</h2>
  <hr/>
  <ul >
  <?php 
    foreach(  $relatedcultures = get_field('relationships') as $related ){ ?>
   <li><a href="<?php echo get_the_permalink($related); ?>"> 
   <?php echo get_the_title($related);?></a></li>
   <hr/>
<?php  
    }
   
 comments_template();
} 
       
?>
</ul>
</div>
    </section>
 
<?php get_footer();?>