<?php

/**
 * Load parent theme style
 */
add_action( 'wp_enqueue_scripts', 'jnews_child_enqueue_parent_style' );

function jnews_child_enqueue_parent_style()
{
    wp_enqueue_style( 'jnews-parent-style', get_parent_theme_file_uri('/style.css'));
    wp_enqueue_style('main-style',get_stylesheet_directory_uri() . '/assets/css/main.css',[],'1.0.0');

    wp_enqueue_style('header-footer-style',get_stylesheet_directory_uri() . '/assets/css/header_footer.css',[],'1.0.0');
    wp_enqueue_script( 'header-footer-script', get_stylesheet_directory_uri() . '/assets/js/header_footer.js', array(), false, true );

    wp_enqueue_style('home-style',get_stylesheet_directory_uri() . '/assets/css/home.css',[],'1.0.0');
    wp_enqueue_script( 'home-script', get_stylesheet_directory_uri() . '/assets/js/home.js', array(), false, true );
}



add_filter( 'get_the_archive_title', function ( $title ) {
    if( is_month() ) {
        $title = single_month_title( ' ', false );
    } else if( is_year() ) {
        $title = get_query_var('year');
    } else if( is_day() ) {
        $title = sprintf( __( '%s' ), get_the_date( _x( 'F j, Y', 'daily archives date format' ) ) );
    } 
    return $title;
});

function register_mediapoint_widgets() {
    register_sidebar(array(
        'name'          => __('Header Calendar', 'your-text-domain'),
        'id'            => 'header_calendar',
        'description'   => __('A widget area for adding a calendar block in the header.', 'your-text-domain'),
        'before_widget' => '<div class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));
    register_sidebar(array(
        'id'=> 'footer_top_posts',
        'name' => 'Footer Top Posts block'
    ));
}


add_action('widgets_init', 'register_mediapoint_widgets');

function render_header_calendar_widget_area($atts) {
    // Check if the widget area has any active widgets
    if (is_active_sidebar('header_calendar')) {
        ob_start();
        dynamic_sidebar('header_calendar');
        return ob_get_clean();
    } else {
        return '<p>' . __('No widgets found in the Header Calendar area.', 'your-text-domain') . '</p>';
    }
}
add_shortcode('header_calendar', 'render_header_calendar_widget_area');