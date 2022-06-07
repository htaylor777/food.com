<?php
//Handles all Programs(POSTS) in the wp dashboard
get_header();
?>

<main class="site-content">
 
<!-- aside class="sidenav"><?php //dynamic_sidebar('sidebar'); ?> </aside -->  
    <!--div class="left-container" -->
<!-- Start of single recipe page -->

<section class="fp-images"> 
    <h2 class="center-text"><?php echo str_replace("Archives: ", "", get_the_archive_title()); ?></h2>
    <hr/>
    <div class="mobile-center">
<table class="no-more-tables">

<p class="professor-cards">
       <tr>
       <?php while (have_posts()) {
    the_post();?>
             <td>
               
   <p class="professor-card__list-item ">
     <a class="professor-card" href="<?php echo get_the_permalink(); ?>">
      <img class="professor-card__image"
        src="<?php echo get_the_post_thumbnail_url(0, 'recipeLandscape') ?>">
       <span class="professor-card__name"><?php echo get_the_title(); ?></span>
      </a>
      </td>        
      </p>
</p>   

<?php } ?>   

        </tr>
       
    </table>
       </div>
    <?php echo paginate_links(); ?>

<?php get_footer();
?>