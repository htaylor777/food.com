<?php
get_header();
?>

<!-- Start of images loop - automatically added from recipes page -->
<section class="fp-images"> 
<h2 class="fp-bottom-header"> Recipes! Recipes! We Got Em'!</h2>

<?php
       if(have_rows('recipes') ) {   
           while( have_rows('recipes') ) {
            the_row();
            $rc_image  = get_sub_field('recipe_image');
            $rc_title  = get_sub_field('recipe_title');
            $rc_about  = get_sub_field('recipe_about');
            $rc_button = get_sub_field('recipe_button');

          //  print_r($rc_image);
          ?>
<div class="row">
<div class="column" > 
<p class="lbi" style="background-image: url(<?php echo $rc_image['url']; ?>)"/>
<?php 
    if( $rc_button ) { ?>
        <a href="<?php echo $rc_button['url']; ?>" class="button3">
        <?php echo $rc_button['title']; ?></a>
        <?php } ?>
<p class="fp-bottom-title"><?php echo $rc_title; ?></p>
<p class="fp-bottom-text flex-wrap"><?php echo $rc_about; ?></p>
  </div>                    
</div>
<?php }} ?>
</div> 
<hr/> 
   
</section>

<?php get_footer();?>
