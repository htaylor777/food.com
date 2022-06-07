<?php
//Handles all Programs(POSTS) in the wp dashboard
get_header();

?>

<main class="site-content">
<aside class="sidenav"><?php dynamic_sidebar('sidebar'); ?> </aside>  
    <div class="left-container">
<!-- Start of single recipe page -->
<section class="fp-images"> 
    <h2 class="center-text">All Cultures</h2>
    <hr/>
    <ul class="link-list min-list">
        <?php
while (have_posts()) {
    the_post();?>
  <li><a href="<?php the_permalink();?>"><?php the_title();?></a></li>

<?php }
echo paginate_links();?>

    </ul>


</div>



<?php get_footer();
?>