<div id="no_comments_section" class="customized_modules">
    <?php dynamic_sidebar( 'footer_top_posts' );?>
</div>
<div class="footer-holder" id="footer" data-id="footer">
        <div class="jeg_footer jeg_footer_sidecontent <?php echo esc_attr( get_theme_mod('jnews_footer_scheme', 'normal') ); ?>">
            <div class="jeg_footer_container <?php echo esc_attr( get_theme_mod('jnews_footer_force_fullwidth', false) ? 'jeg_container_full' : 'jeg_container' ); ?>">
                <div class="jeg_footer_content">
                    <div class="container">
                        <div class="row">

                            <div class="jeg_footer_primary clearfix">
                                <div class="col-md-2 footer_column">
                                    <div class="footer_widget widget_about">
                                        <div class="jeg_about">
                                            <a href="<?php echo esc_url(jnews_home_url_multilang('/')); ?>" class="footer_logo">
                                                <?php jnews_generate_footer_7_logo(); ?>
                                            </a>
                                            <a href="https://gorispressclub.am/" class="footer_logo_gpc">
                                                <img src="<?php echo get_stylesheet_directory_uri() . "/assets/images/logos/gpc_logo.png"  ?>" alt="">
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-7 col-sm-8 footer_column">
                                    <div class="footer_widget widget_nav_menu">
                                        <div class="jeg_footer_heading jeg_footer_heading_2">
                                            <h3 class="jeg_footer_title menu-title"><span><?php echo jnews_get_footer_menu_title(); ?></span></h3>
                                        </div>
                                        <?php jnews_menu()->footer_navigation(); ?>
                                    </div>
                                </div>
                                <div class="col-md-3 col-sm-4 footer_column">
                                    <div class="jeg_footer_heading jeg_footer_heading_2">
                                            <h3 class="jeg_footer_title social-title"><span><?php echo jnews_get_footer_social_title(); ?></span></h3>
                                    </div>

                                    <?php do_action( 'jnews_footer_7_social' ); ?>
                                </div>
                            </div>
                            <p class="copyright"> <?php echo jnews_get_footer_copyright(); ?> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div><!-- /.footer -->

        </div>

        <div class="jscroll-to-top">
        	<a href="#back-to-top" class="jscroll-to-top_link"><i class="fa fa-angle-up"></i></a>
        </div>
    </div>

    <?php

        if(apply_filters('jnews_can_render_account_popup', false))
        {
            get_template_part('fragment/account/account-popup');
        }

        wp_footer();
    ?>
</body>
</html>
