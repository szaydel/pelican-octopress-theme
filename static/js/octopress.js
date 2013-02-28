  


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>octopress/.themes/classic/source/javascripts/octopress.js at master · imathis/octopress · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="http://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="wWxVjKWAtSUTinp0vXe+xRvvTF2rwG3drgTk+qc3OuI=" name="csrf-token" />

    <link href="https://a248.e.akamai.net/assets.github.com/assets/github-c9bf9521bbc72d3dad1a71cb4bd5e8a26a9c872e.css" media="screen" rel="stylesheet" type="text/css" />
    <link href="https://a248.e.akamai.net/assets.github.com/assets/github2-31391be43735cfe2e1fd3b3089a60a0a69567a65.css" media="screen" rel="stylesheet" type="text/css" />
    


      <script src="https://a248.e.akamai.net/assets.github.com/assets/frameworks-898c2db1f151d566cfe6a57c33338e30b3b75033.js" type="text/javascript"></script>
      <script src="https://a248.e.akamai.net/assets.github.com/assets/github-4965fc973c92498566086f8d97f26d5c50f5b811.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="7cafd7722d66613e1c05a442b84a804d">

        <link data-pjax-transient rel='permalink' href='/imathis/octopress/blob/4790b939807be4d9abcc567f02773ff24b99320d/.themes/classic/source/javascripts/octopress.js'>
    <meta property="og:title" content="octopress"/>
    <meta property="og:type" content="githubog:gitrepository"/>
    <meta property="og:url" content="https://github.com/imathis/octopress"/>
    <meta property="og:image" content="https://secure.gravatar.com/avatar/c86443373fbfe92996aa882d0d7a59f8?s=420&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png"/>
    <meta property="og:site_name" content="GitHub"/>
    <meta property="og:description" content="octopress - Octopress is an obsessively designed framework for Jekyll blogging. It’s easy to configure and easy to deploy. Sweet huh?"/>
    <meta property="twitter:card" content="summary"/>
    <meta property="twitter:site" content="@GitHub">
    <meta property="twitter:title" content="imathis/octopress"/>

    <meta name="description" content="octopress - Octopress is an obsessively designed framework for Jekyll blogging. It’s easy to configure and easy to deploy. Sweet huh?" />

  <link href="https://github.com/imathis/octopress/commits/master.atom" rel="alternate" title="Recent Commits to octopress:master" type="application/atom+xml" />

  </head>


  <body class="logged_out page-blob  vis-public env-production  ">
    <div id="wrapper">

      

      

      

      


        <div class="header header-logged-out">
          <div class="container clearfix">

            <a class="header-logo-wordmark" href="https://github.com/">
              <img alt="GitHub" class="github-logo-4x" height="30" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov7@4x.png?1340659530" />
              <img alt="GitHub" class="github-logo-4x-hover" height="30" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov7@4x-hover.png?1340659530" />
            </a>

              
<ul class="top-nav">
    <li class="explore"><a href="https://github.com/explore">Explore GitHub</a></li>
  <li class="search"><a href="https://github.com/search">Search</a></li>
  <li class="features"><a href="https://github.com/features">Features</a></li>
    <li class="blog"><a href="https://github.com/blog">Blog</a></li>
</ul>


            <div class="header-actions">
                <a class="button primary" href="https://github.com/signup">Sign up for free</a>
              <a class="button" href="https://github.com/login?return_to=%2Fimathis%2Foctopress%2Fblob%2Fmaster%2F.themes%2Fclassic%2Fsource%2Fjavascripts%2Foctopress.js">Sign in</a>
            </div>

          </div>
        </div>


      

      


            <div class="site hfeed" itemscope itemtype="http://schema.org/WebPage">
      <div class="hentry">
        
        <div class="pagehead repohead instapaper_ignore readability-menu ">
          <div class="container">
            <div class="title-actions-bar">
              


<ul class="pagehead-actions">



    <li>
      <a href="/login?return_to=%2Fimathis%2Foctopress"
        class="minibutton js-toggler-target star-button entice tooltipped upwards"
        title="You must be signed in to use this feature" rel="nofollow">
        <span class="mini-icon mini-icon-star"></span>Star
      </a>
      <a class="social-count js-social-count" href="/imathis/octopress/stargazers">
        5,152
      </a>
    </li>
    <li>
      <a href="/login?return_to=%2Fimathis%2Foctopress"
        class="minibutton js-toggler-target fork-button entice tooltipped upwards"
        title="You must be signed in to fork a repository" rel="nofollow">
        <span class="mini-icon mini-icon-fork"></span>Fork
      </a>
      <a href="/imathis/octopress/network" class="social-count">
        1,751
      </a>
    </li>
</ul>

              <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
                <span class="repo-label"><span>public</span></span>
                <span class="mega-icon mega-icon-public-repo"></span>
                <span class="author vcard">
                  <a href="/imathis" class="url fn" itemprop="url" rel="author">
                  <span itemprop="title">imathis</span>
                  </a></span> /
                <strong><a href="/imathis/octopress" class="js-current-repository">octopress</a></strong>
              </h1>
            </div>

            
  <ul class="tabs">
    <li><a href="/imathis/octopress" class="selected" highlight="repo_source repo_downloads repo_commits repo_tags repo_branches">Code</a></li>
    <li><a href="/imathis/octopress/network" highlight="repo_network">Network</a></li>
    <li><a href="/imathis/octopress/pulls" highlight="repo_pulls">Pull Requests <span class='counter'>63</span></a></li>

      <li><a href="/imathis/octopress/issues" highlight="repo_issues">Issues <span class='counter'>120</span></a></li>

      <li><a href="/imathis/octopress/wiki" highlight="repo_wiki">Wiki</a></li>


    <li><a href="/imathis/octopress/graphs" highlight="repo_graphs repo_contributors">Graphs</a></li>


  </ul>
  
<div class="tabnav">

  <span class="tabnav-right">
    <ul class="tabnav-tabs">
          <li><a href="/imathis/octopress/tags" class="tabnav-tab" highlight="repo_tags">Tags <span class="counter ">1</span></a></li>
    </ul>
    
  </span>

  <div class="tabnav-widget scope">


    <div class="select-menu js-menu-container js-select-menu js-branch-menu">
      <a class="minibutton select-menu-button js-menu-target" data-hotkey="w" data-ref="master">
        <span class="mini-icon mini-icon-branch"></span>
        <i>branch:</i>
        <span class="js-select-button">master</span>
      </a>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container js-select-menu-pane">

        <div class="select-menu-modal js-select-menu-pane">
          <div class="select-menu-header">
            <span class="select-menu-title">Switch branches/tags</span>
            <span class="mini-icon mini-icon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-filters">
            <div class="select-menu-text-filter">
              <input type="text" id="commitish-filter-field" class="js-select-menu-text-filter js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
            </div> <!-- /.select-menu-text-filter -->
            <div class="select-menu-tabs">
              <ul>
                <li class="select-menu-tab">
                  <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
                </li>
                <li class="select-menu-tab">
                  <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
                </li>
              </ul>
            </div><!-- /.select-menu-tabs -->
          </div><!-- /.select-menu-filters -->

          <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket css-truncate" data-tab-filter="branches" data-filterable-for="commitish-filter-field" data-filterable-type="substring">


              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                <a href="/imathis/octopress/blob/2.1/.themes/classic/source/javascripts/octopress.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="2.1" rel="nofollow" title="2.1">2.1</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                <a href="/imathis/octopress/blob/gh-pages/.themes/classic/source/javascripts/octopress.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="gh-pages" rel="nofollow" title="gh-pages">gh-pages</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                <a href="/imathis/octopress/blob/guard/.themes/classic/source/javascripts/octopress.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="guard" rel="nofollow" title="guard">guard</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                <a href="/imathis/octopress/blob/linklog/.themes/classic/source/javascripts/octopress.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="linklog" rel="nofollow" title="linklog">linklog</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target selected">
                <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                <a href="/imathis/octopress/blob/master/.themes/classic/source/javascripts/octopress.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="master" rel="nofollow" title="master">master</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                <a href="/imathis/octopress/blob/migrator/.themes/classic/source/javascripts/octopress.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="migrator" rel="nofollow" title="migrator">migrator</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                <a href="/imathis/octopress/blob/refactor_with_tests/.themes/classic/source/javascripts/octopress.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="refactor_with_tests" rel="nofollow" title="refactor_with_tests">refactor_with_tests</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                <a href="/imathis/octopress/blob/rubygemcli/.themes/classic/source/javascripts/octopress.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="rubygemcli" rel="nofollow" title="rubygemcli">rubygemcli</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                <a href="/imathis/octopress/blob/site/.themes/classic/source/javascripts/octopress.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="site" rel="nofollow" title="site">site</a>
              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                <a href="/imathis/octopress/blob/site-2.1/.themes/classic/source/javascripts/octopress.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="site-2.1" rel="nofollow" title="site-2.1">site-2.1</a>
              </div> <!-- /.select-menu-item -->

              <div class="select-menu-no-results js-not-filterable">Nothing to show</div>
          </div> <!-- /.select-menu-list -->


          <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket css-truncate" data-tab-filter="tags" data-filterable-for="commitish-filter-field" data-filterable-type="substring">

              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                <a href="/imathis/octopress/blob/v2.0/.themes/classic/source/javascripts/octopress.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.0" rel="nofollow" title="v2.0">v2.0</a>
              </div> <!-- /.select-menu-item -->

            <div class="select-menu-no-results js-not-filterable">Nothing to show</div>

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

  </div> <!-- /.scope -->

  <ul class="tabnav-tabs">
    <li><a href="/imathis/octopress" class="selected tabnav-tab" highlight="repo_source">Files</a></li>
    <li><a href="/imathis/octopress/commits/master" class="tabnav-tab" highlight="repo_commits">Commits</a></li>
    <li><a href="/imathis/octopress/branches" class="tabnav-tab" highlight="repo_branches" rel="nofollow">Branches <span class="counter ">10</span></a></li>
  </ul>

</div>

  
  
  


            
          </div>
        </div><!-- /.repohead -->

        <div id="js-repo-pjax-container" class="container context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:eded1f931303b2fc179c67439e464f38 -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:eded1f931303b2fc179c67439e464f38 -->


<div id="slider">
    <div class="frame-meta">

      <p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

        <div class="breadcrumb">
          <span class='bold'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/imathis/octopress" class="js-slide-to" data-direction="back" itemscope="url"><span itemprop="title">octopress</span></a></span></span> / <span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/imathis/octopress/tree/master/.themes" class="js-slide-to" data-direction="back" itemscope="url"><span itemprop="title">.themes</span></a></span> / <span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/imathis/octopress/tree/master/.themes/classic" class="js-slide-to" data-direction="back" itemscope="url"><span itemprop="title">classic</span></a></span> / <span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/imathis/octopress/tree/master/.themes/classic/source" class="js-slide-to" data-direction="back" itemscope="url"><span itemprop="title">source</span></a></span> / <span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/imathis/octopress/tree/master/.themes/classic/source/javascripts" class="js-slide-to" data-direction="back" itemscope="url"><span itemprop="title">javascripts</span></a></span> / <strong class="final-path">octopress.js</strong> <span class="js-zeroclipboard zeroclipboard-button" data-clipboard-text=".themes/classic/source/javascripts/octopress.js" data-copied-hint="copied!" title="copy to clipboard"><span class="mini-icon mini-icon-clipboard"></span></span>
        </div>

      <a href="/imathis/octopress/find/master" class="js-slide-to" data-hotkey="t" style="display:none">Show File Finder</a>


        
  <div class="commit file-history-tease">
    <img class="main-avatar" height="24" src="https://secure.gravatar.com/avatar/0b3a0d3d88f3505a7bc1aa52e9cad99f?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
    <span class="author"><a href="/floydpink" rel="author">floydpink</a></span>
    <time class="js-relative-date" datetime="2013-02-14T17:22:58-08:00" title="2013-02-14 17:22:58">February 14, 2013</time>
    <div class="commit-title">
        <a href="/imathis/octopress/commit/43751b76d3a3e217b367fa5581ef6032379d1c49" class="message">Fixed issue with mobile nav choosing the last option by default. Fixes</a> <a href="https://github.com/imathis/octopress/issues/950" class="issue-link" title="Mobile navigation menu select has its last option selected by default">…</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>4</strong> contributors</a></p>
          <a class="avatar tooltipped downwards" title="imathis" href="/imathis/octopress/commits/master/.themes/classic/source/javascripts/octopress.js?author=imathis"><img height="20" src="https://secure.gravatar.com/avatar/c86443373fbfe92996aa882d0d7a59f8?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="fhemberger" href="/imathis/octopress/commits/master/.themes/classic/source/javascripts/octopress.js?author=fhemberger"><img height="20" src="https://secure.gravatar.com/avatar/9cfc21bacab0bac4bd3f53947612e079?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="hSATAC" href="/imathis/octopress/commits/master/.themes/classic/source/javascripts/octopress.js?author=hSATAC"><img height="20" src="https://secure.gravatar.com/avatar/c814acfd2c0897d2fc20de6800b76293?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="floydpink" href="/imathis/octopress/commits/master/.themes/classic/source/javascripts/octopress.js?author=floydpink"><img height="20" src="https://secure.gravatar.com/avatar/0b3a0d3d88f3505a7bc1aa52e9cad99f?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2>Users on GitHub who have contributed to this file</h2>
      <ul class="facebox-user-list">
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/c86443373fbfe92996aa882d0d7a59f8?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/imathis">imathis</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/9cfc21bacab0bac4bd3f53947612e079?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/fhemberger">fhemberger</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/c814acfd2c0897d2fc20de6800b76293?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/hSATAC">hSATAC</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/0b3a0d3d88f3505a7bc1aa52e9cad99f?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/floydpink">floydpink</a>
        </li>
      </ul>
    </div>
  </div>


    </div><!-- ./.frame-meta -->

    <div class="frames">
      <div class="frame" data-permalink-url="/imathis/octopress/blob/4790b939807be4d9abcc567f02773ff24b99320d/.themes/classic/source/javascripts/octopress.js" data-title="octopress/.themes/classic/source/javascripts/octopress.js at master · imathis/octopress · GitHub" data-type="blob">

        <div id="files" class="bubble">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><b class="mini-icon mini-icon-text-file"></b></span>
                <span class="mode" title="File Mode">file</span>
                  <span>163 lines (152 sloc)</span>
                <span>8.869 kb</span>
              </div>
              <div class="actions">
                <div class="button-group">
                      <a class="minibutton js-entice" href=""
                         data-entice="You must be signed in and on a branch to make or propose changes">Edit</a>
                  <a href="/imathis/octopress/raw/master/.themes/classic/source/javascripts/octopress.js" class="button minibutton " id="raw-url">Raw</a>
                    <a href="/imathis/octopress/blame/master/.themes/classic/source/javascripts/octopress.js" class="button minibutton ">Blame</a>
                  <a href="/imathis/octopress/commits/master/.themes/classic/source/javascripts/octopress.js" class="button minibutton " rel="nofollow">History</a>
                </div><!-- /.button-group -->
              </div><!-- /.actions -->

            </div>
                <div class="data type-javascript js-blob-data">
      <table cellpadding="0" cellspacing="0" class="lines">
        <tr>
          <td>
            <pre class="line_numbers"><span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
</pre>
          </td>
          <td width="100%">
                  <div class="highlight"><pre><div class='line' id='LC1'><span class="kd">function</span> <span class="nx">getNav</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC2'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">mobileNav</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;nav[role=navigation] fieldset[role=search]&#39;</span><span class="p">).</span><span class="nx">after</span><span class="p">(</span><span class="s1">&#39;&lt;fieldset class=&quot;mobile-nav&quot;&gt;&lt;/fieldset&gt;&#39;</span><span class="p">).</span><span class="nx">next</span><span class="p">().</span><span class="nx">append</span><span class="p">(</span><span class="s1">&#39;&lt;select&gt;&lt;/select&gt;&#39;</span><span class="p">);</span></div><div class='line' id='LC3'>&nbsp;&nbsp;<span class="nx">mobileNav</span><span class="p">.</span><span class="nx">children</span><span class="p">(</span><span class="s1">&#39;select&#39;</span><span class="p">).</span><span class="nx">append</span><span class="p">(</span><span class="s1">&#39;&lt;option value=&quot;&quot;&gt;Navigate&amp;hellip;&lt;/option&gt;&#39;</span><span class="p">);</span></div><div class='line' id='LC4'>&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;ul[role=main-navigation]&#39;</span><span class="p">).</span><span class="nx">addClass</span><span class="p">(</span><span class="s1">&#39;main-navigation&#39;</span><span class="p">);</span></div><div class='line' id='LC5'>&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;ul.main-navigation a&#39;</span><span class="p">).</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">link</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC6'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">mobileNav</span><span class="p">.</span><span class="nx">children</span><span class="p">(</span><span class="s1">&#39;select&#39;</span><span class="p">).</span><span class="nx">append</span><span class="p">(</span><span class="s1">&#39;&lt;option value=&quot;&#39;</span><span class="o">+</span><span class="nx">link</span><span class="p">.</span><span class="nx">href</span><span class="o">+</span><span class="s1">&#39;&quot;&gt;&amp;raquo; &#39;</span><span class="o">+</span><span class="nx">link</span><span class="p">.</span><span class="nx">text</span><span class="o">+</span><span class="s1">&#39;&lt;/option&gt;&#39;</span><span class="p">);</span></div><div class='line' id='LC7'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC8'>&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;ul.subscription a&#39;</span><span class="p">).</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">link</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC9'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">mobileNav</span><span class="p">.</span><span class="nx">children</span><span class="p">(</span><span class="s1">&#39;select&#39;</span><span class="p">).</span><span class="nx">append</span><span class="p">(</span><span class="s1">&#39;&lt;option value=&quot;&#39;</span><span class="o">+</span><span class="nx">link</span><span class="p">.</span><span class="nx">href</span><span class="o">+</span><span class="s1">&#39;&quot;&gt;&amp;raquo; &#39;</span><span class="o">+</span><span class="nx">link</span><span class="p">.</span><span class="nx">text</span><span class="o">+</span><span class="s1">&#39;&lt;/option&gt;&#39;</span><span class="p">);</span></div><div class='line' id='LC10'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC11'>&nbsp;&nbsp;<span class="nx">mobileNav</span><span class="p">.</span><span class="nx">children</span><span class="p">(</span><span class="s1">&#39;select&#39;</span><span class="p">).</span><span class="nx">bind</span><span class="p">(</span><span class="s1">&#39;change&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">event</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC12'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">event</span><span class="p">.</span><span class="nx">target</span><span class="p">.</span><span class="nx">value</span><span class="p">)</span> <span class="p">{</span> <span class="nb">window</span><span class="p">.</span><span class="nx">location</span><span class="p">.</span><span class="nx">href</span> <span class="o">=</span> <span class="nx">event</span><span class="p">.</span><span class="nx">target</span><span class="p">.</span><span class="nx">value</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC13'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC14'>&nbsp;&nbsp;<span class="nx">mobileNav</span><span class="p">.</span><span class="nx">children</span><span class="p">(</span><span class="s1">&#39;select&#39;</span><span class="p">).</span><span class="nx">val</span><span class="p">(</span><span class="s1">&#39;&#39;</span><span class="p">);</span></div><div class='line' id='LC15'><span class="p">}</span></div><div class='line' id='LC16'><br/></div><div class='line' id='LC17'><span class="kd">function</span> <span class="nx">addSidebarToggler</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC18'>&nbsp;&nbsp;<span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">$</span><span class="p">(</span><span class="s1">&#39;body&#39;</span><span class="p">).</span><span class="nx">hasClass</span><span class="p">(</span><span class="s1">&#39;sidebar-footer&#39;</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC19'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;#content&#39;</span><span class="p">).</span><span class="nx">append</span><span class="p">(</span><span class="s1">&#39;&lt;span class=&quot;toggle-sidebar&quot;&gt;&lt;/span&gt;&#39;</span><span class="p">);</span></div><div class='line' id='LC20'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;.toggle-sidebar&#39;</span><span class="p">).</span><span class="nx">bind</span><span class="p">(</span><span class="s1">&#39;click&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC21'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">e</span><span class="p">.</span><span class="nx">preventDefault</span><span class="p">();</span></div><div class='line' id='LC22'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="s1">&#39;body&#39;</span><span class="p">).</span><span class="nx">hasClass</span><span class="p">(</span><span class="s1">&#39;collapse-sidebar&#39;</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC23'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;body&#39;</span><span class="p">).</span><span class="nx">removeClass</span><span class="p">(</span><span class="s1">&#39;collapse-sidebar&#39;</span><span class="p">);</span></div><div class='line' id='LC24'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC25'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;body&#39;</span><span class="p">).</span><span class="nx">addClass</span><span class="p">(</span><span class="s1">&#39;collapse-sidebar&#39;</span><span class="p">);</span></div><div class='line' id='LC26'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC27'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC28'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC29'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">sections</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;aside.sidebar &gt; section&#39;</span><span class="p">);</span></div><div class='line' id='LC30'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">sections</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC31'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">sections</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">section</span><span class="p">,</span> <span class="nx">index</span><span class="p">){</span></div><div class='line' id='LC32'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">((</span><span class="nx">sections</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;=</span> <span class="mi">3</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">index</span> <span class="o">%</span> <span class="mi">3</span> <span class="o">===</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC33'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="nx">section</span><span class="p">).</span><span class="nx">addClass</span><span class="p">(</span><span class="s2">&quot;first&quot;</span><span class="p">);</span></div><div class='line' id='LC34'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC35'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">count</span> <span class="o">=</span> <span class="p">((</span><span class="nx">index</span> <span class="o">+</span><span class="mi">1</span><span class="p">)</span> <span class="o">%</span> <span class="mi">2</span><span class="p">)</span> <span class="o">?</span> <span class="s2">&quot;odd&quot;</span> <span class="o">:</span> <span class="s2">&quot;even&quot;</span><span class="p">;</span></div><div class='line' id='LC36'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="nx">section</span><span class="p">).</span><span class="nx">addClass</span><span class="p">(</span><span class="nx">count</span><span class="p">);</span></div><div class='line' id='LC37'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC38'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC39'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">sections</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;=</span> <span class="mi">3</span><span class="p">){</span> <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;aside.sidebar&#39;</span><span class="p">).</span><span class="nx">addClass</span><span class="p">(</span><span class="s1">&#39;thirds&#39;</span><span class="p">);</span> <span class="p">}</span></div><div class='line' id='LC40'><span class="p">}</span></div><div class='line' id='LC41'><br/></div><div class='line' id='LC42'><span class="kd">function</span> <span class="nx">testFeatures</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC43'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">features</span> <span class="o">=</span> <span class="p">[</span><span class="s1">&#39;maskImage&#39;</span><span class="p">];</span></div><div class='line' id='LC44'>&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="nx">features</span><span class="p">).</span><span class="nx">map</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">feature</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC45'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">Modernizr</span><span class="p">.</span><span class="nx">testAllProps</span><span class="p">(</span><span class="nx">feature</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC46'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;html&#39;</span><span class="p">).</span><span class="nx">addClass</span><span class="p">(</span><span class="nx">feature</span><span class="p">);</span></div><div class='line' id='LC47'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC48'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;html&#39;</span><span class="p">).</span><span class="nx">addClass</span><span class="p">(</span><span class="s1">&#39;no-&#39;</span><span class="o">+</span><span class="nx">feature</span><span class="p">);</span></div><div class='line' id='LC49'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC50'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC51'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="s2">&quot;placeholder&quot;</span> <span class="k">in</span> <span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s2">&quot;input&quot;</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC52'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;html&#39;</span><span class="p">).</span><span class="nx">addClass</span><span class="p">(</span><span class="s1">&#39;placeholder&#39;</span><span class="p">);</span></div><div class='line' id='LC53'>&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC54'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;html&#39;</span><span class="p">).</span><span class="nx">addClass</span><span class="p">(</span><span class="s1">&#39;no-placeholder&#39;</span><span class="p">);</span></div><div class='line' id='LC55'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC56'><span class="p">}</span></div><div class='line' id='LC57'><br/></div><div class='line' id='LC58'><span class="kd">function</span> <span class="nx">addCodeLineNumbers</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC59'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">navigator</span><span class="p">.</span><span class="nx">appName</span> <span class="o">===</span> <span class="s1">&#39;Microsoft Internet Explorer&#39;</span><span class="p">)</span> <span class="p">{</span> <span class="k">return</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC60'>&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;div.gist-highlight&#39;</span><span class="p">).</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">code</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC61'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">tableStart</span> <span class="o">=</span> <span class="s1">&#39;&lt;table&gt;&lt;tbody&gt;&lt;tr&gt;&lt;td class=&quot;gutter&quot;&gt;&#39;</span><span class="p">,</span></div><div class='line' id='LC62'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">lineNumbers</span> <span class="o">=</span> <span class="s1">&#39;&lt;pre class=&quot;line-numbers&quot;&gt;&#39;</span><span class="p">,</span></div><div class='line' id='LC63'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">tableMiddle</span> <span class="o">=</span> <span class="s1">&#39;&lt;/pre&gt;&lt;/td&gt;&lt;td class=&quot;code&quot;&gt;&#39;</span><span class="p">,</span></div><div class='line' id='LC64'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">tableEnd</span> <span class="o">=</span> <span class="s1">&#39;&lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt;&#39;</span><span class="p">,</span></div><div class='line' id='LC65'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">count</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;.line&#39;</span><span class="p">,</span> <span class="nx">code</span><span class="p">).</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC66'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span><span class="o">=</span><span class="mi">1</span><span class="p">;</span><span class="nx">i</span><span class="o">&lt;=</span><span class="nx">count</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC67'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">lineNumbers</span> <span class="o">+=</span> <span class="s1">&#39;&lt;span class=&quot;line-number&quot;&gt;&#39;</span><span class="o">+</span><span class="nx">i</span><span class="o">+</span><span class="s1">&#39;&lt;/span&gt;\n&#39;</span><span class="p">;</span></div><div class='line' id='LC68'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC69'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">table</span> <span class="o">=</span> <span class="nx">tableStart</span> <span class="o">+</span> <span class="nx">lineNumbers</span> <span class="o">+</span> <span class="nx">tableMiddle</span> <span class="o">+</span> <span class="s1">&#39;&lt;pre&gt;&#39;</span><span class="o">+</span><span class="nx">$</span><span class="p">(</span><span class="s1">&#39;pre&#39;</span><span class="p">,</span> <span class="nx">code</span><span class="p">).</span><span class="nx">html</span><span class="p">()</span><span class="o">+</span><span class="s1">&#39;&lt;/pre&gt;&#39;</span> <span class="o">+</span> <span class="nx">tableEnd</span><span class="p">;</span></div><div class='line' id='LC70'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="nx">code</span><span class="p">).</span><span class="nx">html</span><span class="p">(</span><span class="nx">table</span><span class="p">);</span></div><div class='line' id='LC71'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC72'><span class="p">}</span></div><div class='line' id='LC73'><br/></div><div class='line' id='LC74'><span class="kd">function</span> <span class="nx">flashVideoFallback</span><span class="p">(){</span></div><div class='line' id='LC75'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">flashplayerlocation</span> <span class="o">=</span> <span class="s2">&quot;/assets/jwplayer/player.swf&quot;</span><span class="p">,</span></div><div class='line' id='LC76'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">flashplayerskin</span> <span class="o">=</span> <span class="s2">&quot;/assets/jwplayer/glow/glow.xml&quot;</span><span class="p">;</span></div><div class='line' id='LC77'>&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;video&#39;</span><span class="p">).</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">video</span><span class="p">){</span></div><div class='line' id='LC78'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">video</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">video</span><span class="p">);</span></div><div class='line' id='LC79'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">Modernizr</span><span class="p">.</span><span class="nx">video</span><span class="p">.</span><span class="nx">h264</span> <span class="o">&amp;&amp;</span> <span class="nx">swfobject</span><span class="p">.</span><span class="nx">getFlashPlayerVersion</span><span class="p">()</span> <span class="o">||</span> <span class="nb">window</span><span class="p">.</span><span class="nx">location</span><span class="p">.</span><span class="nx">hash</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="s2">&quot;flash-test&quot;</span><span class="p">)</span> <span class="o">!==</span> <span class="o">-</span><span class="mi">1</span><span class="p">){</span></div><div class='line' id='LC80'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">video</span><span class="p">.</span><span class="nx">children</span><span class="p">(</span><span class="s1">&#39;source[src$=mp4]&#39;</span><span class="p">).</span><span class="nx">first</span><span class="p">().</span><span class="nx">map</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">source</span><span class="p">){</span></div><div class='line' id='LC81'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">src</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">source</span><span class="p">).</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;src&#39;</span><span class="p">),</span></div><div class='line' id='LC82'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">id</span> <span class="o">=</span> <span class="s1">&#39;video_&#39;</span><span class="o">+</span><span class="nb">Math</span><span class="p">.</span><span class="nx">round</span><span class="p">(</span><span class="mi">1</span> <span class="o">+</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">random</span><span class="p">()</span><span class="o">*</span><span class="p">(</span><span class="mi">100000</span><span class="p">)),</span></div><div class='line' id='LC83'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">width</span> <span class="o">=</span> <span class="nx">video</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;width&#39;</span><span class="p">),</span></div><div class='line' id='LC84'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">height</span> <span class="o">=</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">video</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;height&#39;</span><span class="p">),</span> <span class="mi">10</span><span class="p">)</span> <span class="o">+</span> <span class="mi">30</span><span class="p">;</span></div><div class='line' id='LC85'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">video</span><span class="p">.</span><span class="nx">after</span><span class="p">(</span><span class="s1">&#39;&lt;div class=&quot;flash-video&quot;&gt;&lt;div&gt;&lt;div id=&#39;</span><span class="o">+</span><span class="nx">id</span><span class="o">+</span><span class="s1">&#39;&gt;&#39;</span><span class="p">);</span></div><div class='line' id='LC86'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">swfobject</span><span class="p">.</span><span class="nx">embedSWF</span><span class="p">(</span><span class="nx">flashplayerlocation</span><span class="p">,</span> <span class="nx">id</span><span class="p">,</span> <span class="nx">width</span><span class="p">,</span> <span class="nx">height</span> <span class="o">+</span> <span class="mi">30</span><span class="p">,</span> <span class="s2">&quot;9.0.0&quot;</span><span class="p">,</span></div><div class='line' id='LC87'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">{</span> <span class="nx">file</span> <span class="o">:</span> <span class="nx">src</span><span class="p">,</span> <span class="nx">image</span> <span class="o">:</span> <span class="nx">video</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;poster&#39;</span><span class="p">),</span> <span class="nx">skin</span> <span class="o">:</span> <span class="nx">flashplayerskin</span> <span class="p">}</span> <span class="p">,</span></div><div class='line' id='LC88'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">{</span> <span class="nx">movie</span> <span class="o">:</span> <span class="nx">src</span><span class="p">,</span> <span class="nx">wmode</span> <span class="o">:</span> <span class="s2">&quot;opaque&quot;</span><span class="p">,</span> <span class="nx">allowfullscreen</span> <span class="o">:</span> <span class="s2">&quot;true&quot;</span> <span class="p">}</span></div><div class='line' id='LC89'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">);</span></div><div class='line' id='LC90'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC91'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">video</span><span class="p">.</span><span class="nx">remove</span><span class="p">();</span></div><div class='line' id='LC92'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC93'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC94'><span class="p">}</span></div><div class='line' id='LC95'><br/></div><div class='line' id='LC96'><span class="kd">function</span> <span class="nx">wrapFlashVideos</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC97'>&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;object&#39;</span><span class="p">).</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">object</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC98'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">object</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">object</span><span class="p">);</span></div><div class='line' id='LC99'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span> <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;param[name=movie]&#39;</span><span class="p">,</span> <span class="nx">object</span><span class="p">).</span><span class="nx">length</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC100'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">wrapper</span> <span class="o">=</span> <span class="nx">object</span><span class="p">.</span><span class="nx">before</span><span class="p">(</span><span class="s1">&#39;&lt;div class=&quot;flash-video&quot;&gt;&lt;div&gt;&#39;</span><span class="p">).</span><span class="nx">previous</span><span class="p">();</span></div><div class='line' id='LC101'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="nx">wrapper</span><span class="p">).</span><span class="nx">children</span><span class="p">().</span><span class="nx">append</span><span class="p">(</span><span class="nx">object</span><span class="p">);</span></div><div class='line' id='LC102'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC103'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC104'>&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;iframe[src*=vimeo],iframe[src*=youtube]&#39;</span><span class="p">).</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">iframe</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC105'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">iframe</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">iframe</span><span class="p">);</span></div><div class='line' id='LC106'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">wrapper</span> <span class="o">=</span> <span class="nx">iframe</span><span class="p">.</span><span class="nx">before</span><span class="p">(</span><span class="s1">&#39;&lt;div class=&quot;flash-video&quot;&gt;&lt;div&gt;&#39;</span><span class="p">).</span><span class="nx">previous</span><span class="p">();</span></div><div class='line' id='LC107'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="nx">wrapper</span><span class="p">).</span><span class="nx">children</span><span class="p">().</span><span class="nx">append</span><span class="p">(</span><span class="nx">iframe</span><span class="p">);</span></div><div class='line' id='LC108'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC109'><span class="p">}</span></div><div class='line' id='LC110'><br/></div><div class='line' id='LC111'><span class="kd">function</span> <span class="nx">renderDeliciousLinks</span><span class="p">(</span><span class="nx">items</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC112'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">output</span> <span class="o">=</span> <span class="s2">&quot;&lt;ul&gt;&quot;</span><span class="p">;</span></div><div class='line' id='LC113'>&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span><span class="o">=</span><span class="mi">0</span><span class="p">,</span><span class="nx">l</span><span class="o">=</span><span class="nx">items</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">&lt;</span><span class="nx">l</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC114'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">output</span> <span class="o">+=</span> <span class="s1">&#39;&lt;li&gt;&lt;a href=&quot;&#39;</span> <span class="o">+</span> <span class="nx">items</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">u</span> <span class="o">+</span> <span class="s1">&#39;&quot; title=&quot;Tags: &#39;</span> <span class="o">+</span> <span class="p">(</span><span class="nx">items</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">t</span> <span class="o">==</span> <span class="s2">&quot;&quot;</span> <span class="o">?</span> <span class="s2">&quot;&quot;</span> <span class="o">:</span> <span class="nx">items</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">t</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s1">&#39;, &#39;</span><span class="p">))</span> <span class="o">+</span> <span class="s1">&#39;&quot;&gt;&#39;</span> <span class="o">+</span> <span class="nx">items</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">d</span> <span class="o">+</span> <span class="s1">&#39;&lt;/a&gt;&lt;/li&gt;&#39;</span><span class="p">;</span></div><div class='line' id='LC115'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC116'>&nbsp;&nbsp;<span class="nx">output</span> <span class="o">+=</span> <span class="s2">&quot;&lt;/ul&gt;&quot;</span><span class="p">;</span></div><div class='line' id='LC117'>&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;#delicious&#39;</span><span class="p">).</span><span class="nx">html</span><span class="p">(</span><span class="nx">output</span><span class="p">);</span></div><div class='line' id='LC118'><span class="p">}</span></div><div class='line' id='LC119'><br/></div><div class='line' id='LC120'><span class="nx">$</span><span class="p">.</span><span class="nx">domReady</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC121'>&nbsp;&nbsp;<span class="nx">testFeatures</span><span class="p">();</span></div><div class='line' id='LC122'>&nbsp;&nbsp;<span class="nx">wrapFlashVideos</span><span class="p">();</span></div><div class='line' id='LC123'>&nbsp;&nbsp;<span class="nx">flashVideoFallback</span><span class="p">();</span></div><div class='line' id='LC124'>&nbsp;&nbsp;<span class="nx">addCodeLineNumbers</span><span class="p">();</span></div><div class='line' id='LC125'>&nbsp;&nbsp;<span class="nx">getNav</span><span class="p">();</span></div><div class='line' id='LC126'>&nbsp;&nbsp;<span class="nx">addSidebarToggler</span><span class="p">();</span></div><div class='line' id='LC127'><span class="p">});</span></div><div class='line' id='LC128'><br/></div><div class='line' id='LC129'><span class="c1">// iOS scaling bug fix</span></div><div class='line' id='LC130'><span class="c1">// Rewritten version</span></div><div class='line' id='LC131'><span class="c1">// By @mathias, @cheeaun and @jdalton</span></div><div class='line' id='LC132'><span class="c1">// Source url: https://gist.github.com/901295</span></div><div class='line' id='LC133'><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">doc</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC134'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">addEvent</span> <span class="o">=</span> <span class="s1">&#39;addEventListener&#39;</span><span class="p">,</span></div><div class='line' id='LC135'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">type</span> <span class="o">=</span> <span class="s1">&#39;gesturestart&#39;</span><span class="p">,</span></div><div class='line' id='LC136'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">qsa</span> <span class="o">=</span> <span class="s1">&#39;querySelectorAll&#39;</span><span class="p">,</span></div><div class='line' id='LC137'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">scales</span> <span class="o">=</span> <span class="p">[</span><span class="mi">1</span><span class="p">,</span> <span class="mi">1</span><span class="p">],</span></div><div class='line' id='LC138'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">meta</span> <span class="o">=</span> <span class="nx">qsa</span> <span class="k">in</span> <span class="nx">doc</span> <span class="o">?</span> <span class="nx">doc</span><span class="p">[</span><span class="nx">qsa</span><span class="p">](</span><span class="s1">&#39;meta[name=viewport]&#39;</span><span class="p">)</span> <span class="o">:</span> <span class="p">[];</span></div><div class='line' id='LC139'>&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">fix</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC140'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">meta</span><span class="p">.</span><span class="nx">content</span> <span class="o">=</span> <span class="s1">&#39;width=device-width,minimum-scale=&#39;</span> <span class="o">+</span> <span class="nx">scales</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">+</span> <span class="s1">&#39;,maximum-scale=&#39;</span> <span class="o">+</span> <span class="nx">scales</span><span class="p">[</span><span class="mi">1</span><span class="p">];</span></div><div class='line' id='LC141'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">doc</span><span class="p">.</span><span class="nx">removeEventListener</span><span class="p">(</span><span class="nx">type</span><span class="p">,</span> <span class="nx">fix</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC142'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC143'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">((</span><span class="nx">meta</span> <span class="o">=</span> <span class="nx">meta</span><span class="p">[</span><span class="nx">meta</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span><span class="p">])</span> <span class="o">&amp;&amp;</span> <span class="nx">addEvent</span> <span class="k">in</span> <span class="nx">doc</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC144'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">fix</span><span class="p">();</span></div><div class='line' id='LC145'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">scales</span> <span class="o">=</span> <span class="p">[</span><span class="mf">0.25</span><span class="p">,</span> <span class="mf">1.6</span><span class="p">];</span></div><div class='line' id='LC146'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">doc</span><span class="p">[</span><span class="nx">addEvent</span><span class="p">](</span><span class="nx">type</span><span class="p">,</span> <span class="nx">fix</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC147'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC148'><span class="p">}(</span><span class="nb">document</span><span class="p">));</span></div><div class='line' id='LC149'><br/></div><div class='line' id='LC150'><span class="cm">/*!	SWFObject v2.2 modified by Brandon Mathis to contain only what is necessary to dynamically embed flash objects</span></div><div class='line' id='LC151'><span class="cm">  * Uncompressed source in javascripts/libs/swfobject-dynamic.js</span></div><div class='line' id='LC152'><span class="cm">  * &lt;http://code.google.com/p/swfobject/&gt;</span></div><div class='line' id='LC153'><span class="cm">	released under the MIT License &lt;http://www.opensource.org/licenses/mit-license.php&gt;</span></div><div class='line' id='LC154'><span class="cm">*/</span></div><div class='line' id='LC155'><span class="kd">var</span> <span class="nx">swfobject</span><span class="o">=</span><span class="kd">function</span><span class="p">(){</span><span class="kd">function</span> <span class="nx">s</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="nx">d</span><span class="p">){</span><span class="kd">var</span> <span class="nx">q</span><span class="p">,</span><span class="nx">k</span><span class="o">=</span><span class="nx">n</span><span class="p">(</span><span class="nx">d</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="nx">g</span><span class="p">.</span><span class="nx">wk</span><span class="o">&amp;&amp;</span><span class="nx">g</span><span class="p">.</span><span class="nx">wk</span><span class="o">&lt;</span><span class="mi">312</span><span class="p">)</span><span class="k">return</span> <span class="nx">q</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="nx">k</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">a</span><span class="p">.</span><span class="nx">id</span><span class="o">==</span><span class="nx">l</span><span class="p">)</span><span class="nx">a</span><span class="p">.</span><span class="nx">id</span><span class="o">=</span><span class="nx">d</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="nx">g</span><span class="p">.</span><span class="nx">ie</span><span class="o">&amp;&amp;</span><span class="nx">g</span><span class="p">.</span><span class="nx">win</span><span class="p">){</span><span class="kd">var</span> <span class="nx">e</span><span class="o">=</span><span class="s2">&quot;&quot;</span><span class="p">,</span><span class="nx">c</span><span class="p">;</span><span class="k">for</span><span class="p">(</span><span class="nx">c</span> <span class="k">in</span> <span class="nx">a</span><span class="p">)</span><span class="k">if</span><span class="p">(</span><span class="nx">a</span><span class="p">[</span><span class="nx">c</span><span class="p">]</span><span class="o">!=</span><span class="nb">Object</span><span class="p">.</span><span class="nx">prototype</span><span class="p">[</span><span class="nx">c</span><span class="p">])</span><span class="nx">c</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">()</span><span class="o">==</span><span class="s2">&quot;data&quot;</span><span class="o">?</span><span class="nx">b</span><span class="p">.</span><span class="nx">movie</span><span class="o">=</span><span class="nx">a</span><span class="p">[</span><span class="nx">c</span><span class="p">]</span><span class="o">:</span><span class="nx">c</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">()</span><span class="o">==</span><span class="s2">&quot;styleclass&quot;</span><span class="o">?</span><span class="nx">e</span><span class="o">+=</span><span class="s1">&#39; class=&quot;&#39;</span><span class="o">+</span><span class="nx">a</span><span class="p">[</span><span class="nx">c</span><span class="p">]</span><span class="o">+</span><span class="s1">&#39;&quot;&#39;</span><span class="o">:</span><span class="nx">c</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">()</span><span class="o">!=</span><span class="s2">&quot;classid&quot;</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">e</span><span class="o">+=</span><span class="s2">&quot; &quot;</span><span class="o">+</span><span class="nx">c</span><span class="o">+</span><span class="s1">&#39;=&quot;&#39;</span><span class="o">+</span><span class="nx">a</span><span class="p">[</span><span class="nx">c</span><span class="p">]</span><span class="o">+</span><span class="s1">&#39;&quot;&#39;</span><span class="p">);</span><span class="nx">c</span><span class="o">=</span><span class="s2">&quot;&quot;</span><span class="p">;</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">f</span> <span class="k">in</span> <span class="nx">b</span><span class="p">)</span><span class="nx">b</span><span class="p">[</span><span class="nx">f</span><span class="p">]</span><span class="o">!=</span><span class="nb">Object</span><span class="p">.</span><span class="nx">prototype</span><span class="p">[</span><span class="nx">f</span><span class="p">]</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">c</span><span class="o">+=</span><span class="s1">&#39;&lt;param name=&quot;&#39;</span><span class="o">+</span><span class="nx">f</span><span class="o">+</span><span class="s1">&#39;&quot; value=&quot;&#39;</span><span class="o">+</span><span class="nx">b</span><span class="p">[</span><span class="nx">f</span><span class="p">]</span><span class="o">+</span><span class="s1">&#39;&quot; /&gt;&#39;</span><span class="p">);</span><span class="nx">k</span><span class="p">.</span><span class="nx">outerHTML</span><span class="o">=</span><span class="s1">&#39;&lt;object classid=&quot;clsid:D27CDB6E-AE6D-11cf-96B8-444553540000&quot;&#39;</span><span class="o">+</span><span class="nx">e</span><span class="o">+</span><span class="s2">&quot;&gt;&quot;</span><span class="o">+</span><span class="nx">c</span><span class="o">+</span></div><div class='line' id='LC156'><span class="s2">&quot;&lt;/object&gt;&quot;</span><span class="p">;</span><span class="nx">q</span><span class="o">=</span><span class="nx">n</span><span class="p">(</span><span class="nx">a</span><span class="p">.</span><span class="nx">id</span><span class="p">)}</span><span class="k">else</span><span class="p">{</span><span class="nx">f</span><span class="o">=</span><span class="nx">i</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="nx">o</span><span class="p">);</span><span class="nx">f</span><span class="p">.</span><span class="nx">setAttribute</span><span class="p">(</span><span class="s2">&quot;type&quot;</span><span class="p">,</span><span class="nx">m</span><span class="p">);</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">h</span> <span class="k">in</span> <span class="nx">a</span><span class="p">)</span><span class="nx">a</span><span class="p">[</span><span class="nx">h</span><span class="p">]</span><span class="o">!=</span><span class="nb">Object</span><span class="p">.</span><span class="nx">prototype</span><span class="p">[</span><span class="nx">h</span><span class="p">]</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">h</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">()</span><span class="o">==</span><span class="s2">&quot;styleclass&quot;</span><span class="o">?</span><span class="nx">f</span><span class="p">.</span><span class="nx">setAttribute</span><span class="p">(</span><span class="s2">&quot;class&quot;</span><span class="p">,</span><span class="nx">a</span><span class="p">[</span><span class="nx">h</span><span class="p">])</span><span class="o">:</span><span class="nx">h</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">()</span><span class="o">!=</span><span class="s2">&quot;classid&quot;</span><span class="o">&amp;&amp;</span><span class="nx">f</span><span class="p">.</span><span class="nx">setAttribute</span><span class="p">(</span><span class="nx">h</span><span class="p">,</span><span class="nx">a</span><span class="p">[</span><span class="nx">h</span><span class="p">]));</span><span class="k">for</span><span class="p">(</span><span class="nx">e</span> <span class="k">in</span> <span class="nx">b</span><span class="p">)</span><span class="nx">b</span><span class="p">[</span><span class="nx">e</span><span class="p">]</span><span class="o">!=</span><span class="nb">Object</span><span class="p">.</span><span class="nx">prototype</span><span class="p">[</span><span class="nx">e</span><span class="p">]</span><span class="o">&amp;&amp;</span><span class="nx">e</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">()</span><span class="o">!=</span><span class="s2">&quot;movie&quot;</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">a</span><span class="o">=</span><span class="nx">f</span><span class="p">,</span><span class="nx">c</span><span class="o">=</span><span class="nx">e</span><span class="p">,</span><span class="nx">h</span><span class="o">=</span><span class="nx">b</span><span class="p">[</span><span class="nx">e</span><span class="p">],</span><span class="nx">d</span><span class="o">=</span><span class="nx">i</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s2">&quot;param&quot;</span><span class="p">),</span><span class="nx">d</span><span class="p">.</span><span class="nx">setAttribute</span><span class="p">(</span><span class="s2">&quot;name&quot;</span><span class="p">,</span><span class="nx">c</span><span class="p">),</span><span class="nx">d</span><span class="p">.</span><span class="nx">setAttribute</span><span class="p">(</span><span class="s2">&quot;value&quot;</span><span class="p">,</span><span class="nx">h</span><span class="p">),</span><span class="nx">a</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">d</span><span class="p">));</span><span class="nx">k</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">.</span><span class="nx">replaceChild</span><span class="p">(</span><span class="nx">f</span><span class="p">,</span><span class="nx">k</span><span class="p">);</span><span class="nx">q</span><span class="o">=</span><span class="nx">f</span><span class="p">}}</span><span class="k">return</span> <span class="nx">q</span><span class="p">}</span><span class="kd">function</span> <span class="nx">n</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="kd">var</span> <span class="nx">b</span><span class="o">=</span><span class="kc">null</span><span class="p">;</span><span class="k">try</span><span class="p">{</span><span class="nx">b</span><span class="o">=</span><span class="nx">i</span><span class="p">.</span><span class="nx">getElementById</span><span class="p">(</span><span class="nx">a</span><span class="p">)}</span><span class="k">catch</span><span class="p">(</span><span class="nx">d</span><span class="p">){}</span><span class="k">return</span> <span class="nx">b</span><span class="p">}</span></div><div class='line' id='LC157'><span class="kd">function</span> <span class="nx">t</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="kd">var</span> <span class="nx">b</span><span class="o">=</span><span class="nx">g</span><span class="p">.</span><span class="nx">pv</span><span class="p">,</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot;.&quot;</span><span class="p">);</span><span class="nx">a</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span><span class="o">=</span><span class="nb">parseInt</span><span class="p">(</span><span class="nx">a</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span><span class="mi">10</span><span class="p">);</span><span class="nx">a</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span><span class="o">=</span><span class="nb">parseInt</span><span class="p">(</span><span class="nx">a</span><span class="p">[</span><span class="mi">1</span><span class="p">],</span><span class="mi">10</span><span class="p">)</span><span class="o">||</span><span class="mi">0</span><span class="p">;</span><span class="nx">a</span><span class="p">[</span><span class="mi">2</span><span class="p">]</span><span class="o">=</span><span class="nb">parseInt</span><span class="p">(</span><span class="nx">a</span><span class="p">[</span><span class="mi">2</span><span class="p">],</span><span class="mi">10</span><span class="p">)</span><span class="o">||</span><span class="mi">0</span><span class="p">;</span><span class="k">return</span> <span class="nx">b</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span><span class="o">&gt;</span><span class="nx">a</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span><span class="o">||</span><span class="nx">b</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span><span class="o">==</span><span class="nx">a</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span><span class="o">&amp;&amp;</span><span class="nx">b</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span><span class="o">&gt;</span><span class="nx">a</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span><span class="o">||</span><span class="nx">b</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span><span class="o">==</span><span class="nx">a</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span><span class="o">&amp;&amp;</span><span class="nx">b</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span><span class="o">==</span><span class="nx">a</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span><span class="o">&amp;&amp;</span><span class="nx">b</span><span class="p">[</span><span class="mi">2</span><span class="p">]</span><span class="o">&gt;=</span><span class="nx">a</span><span class="p">[</span><span class="mi">2</span><span class="p">]</span><span class="o">?!</span><span class="mi">0</span><span class="o">:!</span><span class="mi">1</span><span class="p">}</span><span class="kd">function</span> <span class="nx">u</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span><span class="sr">/[\\\&quot;&lt;&gt;\.;]/</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">a</span><span class="p">)</span><span class="o">!=</span><span class="kc">null</span><span class="o">&amp;&amp;</span><span class="k">typeof</span> <span class="nb">encodeURIComponent</span><span class="o">!=</span><span class="nx">l</span><span class="o">?</span><span class="nb">encodeURIComponent</span><span class="p">(</span><span class="nx">a</span><span class="p">)</span><span class="o">:</span><span class="nx">a</span><span class="p">}</span><span class="kd">var</span> <span class="nx">l</span><span class="o">=</span><span class="s2">&quot;undefined&quot;</span><span class="p">,</span><span class="nx">o</span><span class="o">=</span><span class="s2">&quot;object&quot;</span><span class="p">,</span><span class="nx">m</span><span class="o">=</span><span class="s2">&quot;application/x-shockwave-flash&quot;</span><span class="p">,</span><span class="nx">v</span><span class="o">=</span><span class="nb">window</span><span class="p">,</span><span class="nx">i</span><span class="o">=</span><span class="nb">document</span><span class="p">,</span><span class="nx">j</span><span class="o">=</span><span class="nx">navigator</span><span class="p">,</span><span class="nx">g</span><span class="o">=</span><span class="kd">function</span><span class="p">(){</span><span class="kd">var</span> <span class="nx">a</span><span class="o">=</span><span class="k">typeof</span> <span class="nx">i</span><span class="p">.</span><span class="nx">getElementById</span><span class="o">!=</span><span class="nx">l</span><span class="o">&amp;&amp;</span><span class="k">typeof</span> <span class="nx">i</span><span class="p">.</span><span class="nx">getElementsByTagName</span><span class="o">!=</span><span class="nx">l</span><span class="o">&amp;&amp;</span><span class="k">typeof</span> <span class="nx">i</span><span class="p">.</span><span class="nx">createElement</span><span class="o">!=</span><span class="nx">l</span><span class="p">,</span></div><div class='line' id='LC158'><span class="nx">b</span><span class="o">=</span><span class="nx">j</span><span class="p">.</span><span class="nx">userAgent</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">(),</span><span class="nx">d</span><span class="o">=</span><span class="nx">j</span><span class="p">.</span><span class="nx">platform</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">(),</span><span class="nx">g</span><span class="o">=</span><span class="nx">d</span><span class="o">?</span><span class="sr">/win/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">d</span><span class="p">)</span><span class="o">:</span><span class="sr">/win/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">b</span><span class="p">),</span><span class="nx">d</span><span class="o">=</span><span class="nx">d</span><span class="o">?</span><span class="sr">/mac/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">d</span><span class="p">)</span><span class="o">:</span><span class="sr">/mac/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">b</span><span class="p">),</span><span class="nx">b</span><span class="o">=</span><span class="sr">/webkit/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">b</span><span class="p">)</span><span class="o">?</span><span class="nb">parseFloat</span><span class="p">(</span><span class="nx">b</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^.*webkit\/(\d+(\.\d+)?).*$/</span><span class="p">,</span><span class="s2">&quot;$1&quot;</span><span class="p">))</span><span class="o">:!</span><span class="mi">1</span><span class="p">,</span><span class="nx">k</span><span class="o">=!+</span><span class="s2">&quot;\u000b1&quot;</span><span class="p">,</span><span class="nx">e</span><span class="o">=</span><span class="p">[</span><span class="mi">0</span><span class="p">,</span><span class="mi">0</span><span class="p">,</span><span class="mi">0</span><span class="p">],</span><span class="nx">c</span><span class="o">=</span><span class="kc">null</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">j</span><span class="p">.</span><span class="nx">plugins</span><span class="o">!=</span><span class="nx">l</span><span class="o">&amp;&amp;</span><span class="k">typeof</span> <span class="nx">j</span><span class="p">.</span><span class="nx">plugins</span><span class="p">[</span><span class="s2">&quot;Shockwave Flash&quot;</span><span class="p">]</span><span class="o">==</span><span class="nx">o</span><span class="p">){</span><span class="k">if</span><span class="p">((</span><span class="nx">c</span><span class="o">=</span><span class="nx">j</span><span class="p">.</span><span class="nx">plugins</span><span class="p">[</span><span class="s2">&quot;Shockwave Flash&quot;</span><span class="p">].</span><span class="nx">description</span><span class="p">)</span><span class="o">&amp;&amp;!</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">j</span><span class="p">.</span><span class="nx">mimeTypes</span><span class="o">!=</span><span class="nx">l</span><span class="o">&amp;&amp;</span><span class="nx">j</span><span class="p">.</span><span class="nx">mimeTypes</span><span class="p">[</span><span class="nx">m</span><span class="p">]</span><span class="o">&amp;&amp;!</span><span class="nx">j</span><span class="p">.</span><span class="nx">mimeTypes</span><span class="p">[</span><span class="nx">m</span><span class="p">].</span><span class="nx">enabledPlugin</span><span class="p">))</span><span class="nx">k</span><span class="o">=!</span><span class="mi">1</span><span class="p">,</span><span class="nx">c</span><span class="o">=</span><span class="nx">c</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^.*\s+(\S+\s+\S+$)/</span><span class="p">,</span><span class="s2">&quot;$1&quot;</span><span class="p">),</span><span class="nx">e</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span><span class="o">=</span><span class="nb">parseInt</span><span class="p">(</span><span class="nx">c</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^(.*)\..*$/</span><span class="p">,</span><span class="s2">&quot;$1&quot;</span><span class="p">),</span></div><div class='line' id='LC159'><span class="mi">10</span><span class="p">),</span><span class="nx">e</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span><span class="o">=</span><span class="nb">parseInt</span><span class="p">(</span><span class="nx">c</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^.*\.(.*)\s.*$/</span><span class="p">,</span><span class="s2">&quot;$1&quot;</span><span class="p">),</span><span class="mi">10</span><span class="p">),</span><span class="nx">e</span><span class="p">[</span><span class="mi">2</span><span class="p">]</span><span class="o">=</span><span class="sr">/[a-zA-Z]/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">c</span><span class="p">)</span><span class="o">?</span><span class="nb">parseInt</span><span class="p">(</span><span class="nx">c</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^.*[a-zA-Z]+(.*)$/</span><span class="p">,</span><span class="s2">&quot;$1&quot;</span><span class="p">),</span><span class="mi">10</span><span class="p">)</span><span class="o">:</span><span class="mi">0</span><span class="p">}</span><span class="k">else</span> <span class="k">if</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">v</span><span class="p">.</span><span class="nx">ActiveXObject</span><span class="o">!=</span><span class="nx">l</span><span class="p">)</span><span class="k">try</span><span class="p">{</span><span class="kd">var</span> <span class="nx">f</span><span class="o">=</span><span class="k">new</span> <span class="nx">ActiveXObject</span><span class="p">(</span><span class="s2">&quot;ShockwaveFlash.ShockwaveFlash&quot;</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="nx">f</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">c</span><span class="o">=</span><span class="nx">f</span><span class="p">.</span><span class="nx">GetVariable</span><span class="p">(</span><span class="s2">&quot;$version&quot;</span><span class="p">)))</span><span class="nx">k</span><span class="o">=!</span><span class="mi">0</span><span class="p">,</span><span class="nx">c</span><span class="o">=</span><span class="nx">c</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot; &quot;</span><span class="p">)[</span><span class="mi">1</span><span class="p">].</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot;,&quot;</span><span class="p">),</span><span class="nx">e</span><span class="o">=</span><span class="p">[</span><span class="nb">parseInt</span><span class="p">(</span><span class="nx">c</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span><span class="mi">10</span><span class="p">),</span><span class="nb">parseInt</span><span class="p">(</span><span class="nx">c</span><span class="p">[</span><span class="mi">1</span><span class="p">],</span><span class="mi">10</span><span class="p">),</span><span class="nb">parseInt</span><span class="p">(</span><span class="nx">c</span><span class="p">[</span><span class="mi">2</span><span class="p">],</span><span class="mi">10</span><span class="p">)]}</span><span class="k">catch</span><span class="p">(</span><span class="nx">h</span><span class="p">){}</span><span class="k">return</span><span class="p">{</span><span class="nx">w3</span><span class="o">:</span><span class="nx">a</span><span class="p">,</span><span class="nx">pv</span><span class="o">:</span><span class="nx">e</span><span class="p">,</span><span class="nx">wk</span><span class="o">:</span><span class="nx">b</span><span class="p">,</span><span class="nx">ie</span><span class="o">:</span><span class="nx">k</span><span class="p">,</span><span class="nx">win</span><span class="o">:</span><span class="nx">g</span><span class="p">,</span><span class="nx">mac</span><span class="o">:</span><span class="nx">d</span><span class="p">}}();</span><span class="k">return</span><span class="p">{</span><span class="nx">embedSWF</span><span class="o">:</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="nx">d</span><span class="p">,</span><span class="nx">i</span><span class="p">,</span><span class="nx">k</span><span class="p">,</span><span class="nx">e</span><span class="p">,</span><span class="nx">c</span><span class="p">,</span><span class="nx">f</span><span class="p">,</span><span class="nx">h</span><span class="p">){</span><span class="kd">var</span> <span class="nx">j</span><span class="o">=</span><span class="p">{</span><span class="nx">success</span><span class="o">:!</span><span class="mi">1</span><span class="p">,</span><span class="nx">id</span><span class="o">:</span><span class="nx">b</span><span class="p">};</span><span class="k">if</span><span class="p">(</span><span class="nx">g</span><span class="p">.</span><span class="nx">w3</span><span class="o">&amp;&amp;!</span><span class="p">(</span><span class="nx">g</span><span class="p">.</span><span class="nx">wk</span><span class="o">&amp;&amp;</span><span class="nx">g</span><span class="p">.</span><span class="nx">wk</span><span class="o">&lt;</span><span class="mi">312</span><span class="p">)</span><span class="o">&amp;&amp;</span></div><div class='line' id='LC160'><span class="nx">a</span><span class="o">&amp;&amp;</span><span class="nx">b</span><span class="o">&amp;&amp;</span><span class="nx">d</span><span class="o">&amp;&amp;</span><span class="nx">i</span><span class="o">&amp;&amp;</span><span class="nx">k</span><span class="p">){</span><span class="nx">d</span><span class="o">+=</span><span class="s2">&quot;&quot;</span><span class="p">;</span><span class="nx">i</span><span class="o">+=</span><span class="s2">&quot;&quot;</span><span class="p">;</span><span class="kd">var</span> <span class="nx">p</span><span class="o">=</span><span class="p">{};</span><span class="k">if</span><span class="p">(</span><span class="nx">f</span><span class="o">&amp;&amp;</span><span class="k">typeof</span> <span class="nx">f</span><span class="o">===</span><span class="nx">o</span><span class="p">)</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">m</span> <span class="k">in</span> <span class="nx">f</span><span class="p">)</span><span class="nx">p</span><span class="p">[</span><span class="nx">m</span><span class="p">]</span><span class="o">=</span><span class="nx">f</span><span class="p">[</span><span class="nx">m</span><span class="p">];</span><span class="nx">p</span><span class="p">.</span><span class="nx">data</span><span class="o">=</span><span class="nx">a</span><span class="p">;</span><span class="nx">p</span><span class="p">.</span><span class="nx">width</span><span class="o">=</span><span class="nx">d</span><span class="p">;</span><span class="nx">p</span><span class="p">.</span><span class="nx">height</span><span class="o">=</span><span class="nx">i</span><span class="p">;</span><span class="nx">a</span><span class="o">=</span><span class="p">{};</span><span class="k">if</span><span class="p">(</span><span class="nx">c</span><span class="o">&amp;&amp;</span><span class="k">typeof</span> <span class="nx">c</span><span class="o">===</span><span class="nx">o</span><span class="p">)</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">n</span> <span class="k">in</span> <span class="nx">c</span><span class="p">)</span><span class="nx">a</span><span class="p">[</span><span class="nx">n</span><span class="p">]</span><span class="o">=</span><span class="nx">c</span><span class="p">[</span><span class="nx">n</span><span class="p">];</span><span class="k">if</span><span class="p">(</span><span class="nx">e</span><span class="o">&amp;&amp;</span><span class="k">typeof</span> <span class="nx">e</span><span class="o">===</span><span class="nx">o</span><span class="p">)</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">r</span> <span class="k">in</span> <span class="nx">e</span><span class="p">)</span><span class="k">typeof</span> <span class="nx">a</span><span class="p">.</span><span class="nx">flashvars</span><span class="o">!=</span><span class="nx">l</span><span class="o">?</span><span class="nx">a</span><span class="p">.</span><span class="nx">flashvars</span><span class="o">+=</span><span class="s2">&quot;&amp;&quot;</span><span class="o">+</span><span class="nx">r</span><span class="o">+</span><span class="s2">&quot;=&quot;</span><span class="o">+</span><span class="nx">e</span><span class="p">[</span><span class="nx">r</span><span class="p">]</span><span class="o">:</span><span class="nx">a</span><span class="p">.</span><span class="nx">flashvars</span><span class="o">=</span><span class="nx">r</span><span class="o">+</span><span class="s2">&quot;=&quot;</span><span class="o">+</span><span class="nx">e</span><span class="p">[</span><span class="nx">r</span><span class="p">];</span><span class="k">if</span><span class="p">(</span><span class="nx">t</span><span class="p">(</span><span class="nx">k</span><span class="p">))</span><span class="nx">b</span><span class="o">=</span><span class="nx">s</span><span class="p">(</span><span class="nx">p</span><span class="p">,</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">),</span><span class="nx">j</span><span class="p">.</span><span class="nx">success</span><span class="o">=!</span><span class="mi">0</span><span class="p">,</span><span class="nx">j</span><span class="p">.</span><span class="nx">ref</span><span class="o">=</span><span class="nx">b</span><span class="p">}</span><span class="nx">h</span><span class="o">&amp;&amp;</span><span class="nx">h</span><span class="p">(</span><span class="nx">j</span><span class="p">)},</span><span class="nx">ua</span><span class="o">:</span><span class="nx">g</span><span class="p">,</span><span class="nx">getFlashPlayerVersion</span><span class="o">:</span><span class="kd">function</span><span class="p">(){</span><span class="k">return</span><span class="p">{</span><span class="nx">major</span><span class="o">:</span><span class="nx">g</span><span class="p">.</span><span class="nx">pv</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span><span class="nx">minor</span><span class="o">:</span><span class="nx">g</span><span class="p">.</span><span class="nx">pv</span><span class="p">[</span><span class="mi">1</span><span class="p">],</span><span class="nx">release</span><span class="o">:</span><span class="nx">g</span><span class="p">.</span><span class="nx">pv</span><span class="p">[</span><span class="mi">2</span><span class="p">]}},</span><span class="nx">hasFlashPlayerVersion</span><span class="o">:</span><span class="nx">t</span><span class="p">,</span><span class="nx">createSWF</span><span class="o">:</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="nx">d</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="nx">g</span><span class="p">.</span><span class="nx">w3</span><span class="p">)</span><span class="k">return</span> <span class="nx">s</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="nx">d</span><span class="p">)},</span><span class="nx">getQueryParamValue</span><span class="o">:</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="kd">var</span> <span class="nx">b</span><span class="o">=</span></div><div class='line' id='LC161'><span class="nx">i</span><span class="p">.</span><span class="nx">location</span><span class="p">.</span><span class="nx">search</span><span class="o">||</span><span class="nx">i</span><span class="p">.</span><span class="nx">location</span><span class="p">.</span><span class="nx">hash</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="nx">b</span><span class="p">){</span><span class="sr">/\?/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">b</span><span class="p">)</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">b</span><span class="o">=</span><span class="nx">b</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot;?&quot;</span><span class="p">)[</span><span class="mi">1</span><span class="p">]);</span><span class="k">if</span><span class="p">(</span><span class="nx">a</span><span class="o">==</span><span class="kc">null</span><span class="p">)</span><span class="k">return</span> <span class="nx">u</span><span class="p">(</span><span class="nx">b</span><span class="p">);</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">b</span><span class="o">=</span><span class="nx">b</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot;&amp;&quot;</span><span class="p">),</span><span class="nx">d</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span><span class="nx">d</span><span class="o">&lt;</span><span class="nx">b</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span><span class="nx">d</span><span class="o">++</span><span class="p">)</span><span class="k">if</span><span class="p">(</span><span class="nx">b</span><span class="p">[</span><span class="nx">d</span><span class="p">].</span><span class="nx">substring</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span><span class="nx">b</span><span class="p">[</span><span class="nx">d</span><span class="p">].</span><span class="nx">indexOf</span><span class="p">(</span><span class="s2">&quot;=&quot;</span><span class="p">))</span><span class="o">==</span><span class="nx">a</span><span class="p">)</span><span class="k">return</span> <span class="nx">u</span><span class="p">(</span><span class="nx">b</span><span class="p">[</span><span class="nx">d</span><span class="p">].</span><span class="nx">substring</span><span class="p">(</span><span class="nx">b</span><span class="p">[</span><span class="nx">d</span><span class="p">].</span><span class="nx">indexOf</span><span class="p">(</span><span class="s2">&quot;=&quot;</span><span class="p">)</span><span class="o">+</span><span class="mi">1</span><span class="p">))}</span><span class="k">return</span><span class="s2">&quot;&quot;</span><span class="p">}}}();</span></div><div class='line' id='LC162'><br/></div></pre></div>
          </td>
        </tr>
      </table>
  </div>

          </div>
        </div>

        <a href="#jump-to-line" rel="facebox" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
        <div id="jump-to-line" style="display:none">
          <h2>Jump to Line</h2>
          <form accept-charset="UTF-8" class="js-jump-to-line-form">
            <input class="textfield js-jump-to-line-field" type="text">
            <div class="full-button">
              <button type="submit" class="button">Go</button>
            </div>
          </form>
        </div>

      </div>
    </div>
</div>

<div id="js-frame-loading-template" class="frame frame-loading large-loading-area" style="display:none;">
  <img class="js-frame-loading-spinner" src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-128.gif?1347543525" height="64" width="64">
</div>


        </div>
      </div>
      <div class="context-overlay"></div>
    </div>

      <div id="footer-push"></div><!-- hack for sticky footer -->
    </div><!-- end of wrapper - hack for sticky footer -->

      <!-- footer -->
      <div id="footer">
  <div class="container clearfix">

      <dl class="footer_nav">
        <dt>GitHub</dt>
        <dd><a href="https://github.com/about">About us</a></dd>
        <dd><a href="https://github.com/blog">Blog</a></dd>
        <dd><a href="https://github.com/contact">Contact &amp; support</a></dd>
        <dd><a href="http://enterprise.github.com/">GitHub Enterprise</a></dd>
        <dd><a href="http://status.github.com/">Site status</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Applications</dt>
        <dd><a href="http://mac.github.com/">GitHub for Mac</a></dd>
        <dd><a href="http://windows.github.com/">GitHub for Windows</a></dd>
        <dd><a href="http://eclipse.github.com/">GitHub for Eclipse</a></dd>
        <dd><a href="http://mobile.github.com/">GitHub mobile apps</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Services</dt>
        <dd><a href="http://get.gaug.es/">Gauges: Web analytics</a></dd>
        <dd><a href="http://speakerdeck.com">Speaker Deck: Presentations</a></dd>
        <dd><a href="https://gist.github.com">Gist: Code snippets</a></dd>
        <dd><a href="http://jobs.github.com/">Job board</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Documentation</dt>
        <dd><a href="http://help.github.com/">GitHub Help</a></dd>
        <dd><a href="http://developer.github.com/">Developer API</a></dd>
        <dd><a href="http://github.github.com/github-flavored-markdown/">GitHub Flavored Markdown</a></dd>
        <dd><a href="http://pages.github.com/">GitHub Pages</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>More</dt>
        <dd><a href="http://training.github.com/">Training</a></dd>
        <dd><a href="https://github.com/edu">Students &amp; teachers</a></dd>
        <dd><a href="http://shop.github.com">The Shop</a></dd>
        <dd><a href="/plans">Plans &amp; pricing</a></dd>
        <dd><a href="http://octodex.github.com/">The Octodex</a></dd>
      </dl>

      <hr class="footer-divider">


    <p class="right">&copy; 2013 <span title="0.04395s from fe17.rs.github.com">GitHub</span>, Inc. All rights reserved.</p>
    <a class="left" href="https://github.com/">
      <span class="mega-icon mega-icon-invertocat"></span>
    </a>
    <ul id="legal">
        <li><a href="https://github.com/site/terms">Terms of Service</a></li>
        <li><a href="https://github.com/site/privacy">Privacy</a></li>
        <li><a href="https://github.com/security">Security</a></li>
    </ul>

  </div><!-- /.container -->

</div><!-- /.#footer -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/imathis/octopress/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-icon mega-icon-normalscreen"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="mini-icon mini-icon-brightness"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="mini-icon mini-icon-exclamation"></span>
      Something went wrong with that request. Please try again.
      <a href="#" class="mini-icon mini-icon-remove-close ajax-error-dismiss"></a>
    </div>

    
    
    <span id='server_response_time' data-time='0.04438' data-host='fe17'></span>
    
  </body>
</html>

