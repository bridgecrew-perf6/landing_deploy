import React, { useEffect } from "react";
import Layout from "./components/Layout";
import HeaderNavBar from "./components/Header";
import Footer from "./components/footer";
import BlogTabs from "../components/blogtab";
import { FeaturedBlog } from "../components/featured";
import { GridBlog } from "../components/gridblogs";
import { BlockBlog } from "../components/blockblogs";
export default function Blogs(props) {
  useEffect(function () {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", "UA-155055672-1");

    // window.dataLayer = window.dataLayer || [];
    // function gtag(){dataLayer.push(arguments);}
    // gtag('js', new Date());

    // gtag('config', 'UA-155055672-1');

    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod
          ? n.callMethod.apply(n, arguments)
          : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = "2.0";
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(
      window,
      document,
      "script",
      "https://connect.facebook.net/en_US/fbevents.js"
    );
    fbq("init", "2443278019308080");
    fbq("track", "PageView");

    (function () {
      var w = window;
      var ic = w.Intercom;
      if (typeof ic === "function") {
        ic("reattach_activator");
        ic("update", w.intercomSettings);
      } else {
        var d = document;
        var i = function () {
          i.c(arguments);
        };
        i.q = [];
        i.c = function (args) {
          i.q.push(args);
        };
        w.Intercom = i;
        var l = function () {
          var s = d.createElement("script");
          s.type = "text/javascript";
          s.async = true;
          s.src = "https://widget.intercom.io/widget/v63lode2";
          var x = d.getElementsByTagName("script")[0];
          x.parentNode.insertBefore(s, x);
        };
        if (w.attachEvent) {
          w.attachEvent("onload", l);
        } else {
          w.addEventListener("load", l, false);
        }
      }
    })();
    window.intercomSettings = { app_id: "v63lode2",custom_launcher_selector:'#my_custom_link' };
  }, []);
  const BLOG_URL = 'http://ec2-3-18-44-14.us-east-2.compute.amazonaws.com';
  const CONTENT_API_KEY = 'ed21690cfdb1a24af4718cbfa8';

  async function getPosts() {
    const res = await fetch(
      `${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&include=feature_image,tags`
    ).then((res) => res.json())
    
    const posts = res.posts
  
    return posts
  }
  const getStaticProps = async ({ params }) => {
    const posts = await getPosts()
    return {
      revalidate: 10,
      props: { posts }
    }
  }
  console.log(props);
  return (
    <Layout pageTitle="Moneymie Blog: Better Banking for African Migrants">
      <HeaderNavBar />
        <BlogTabs active="all"/>
        <FeaturedBlog/>
        <GridBlog type="education" title="Education"/>
        <GridBlog type="health" title="Health"/>
        <BlockBlog type="tax" title="Tax"/>
      <Footer />
    </Layout>
  );
}
