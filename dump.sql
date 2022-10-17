--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: links; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.links (
    id integer NOT NULL,
    userid integer NOT NULL,
    url text NOT NULL,
    shorturl text NOT NULL,
    visitcount integer,
    createdat timestamp without time zone DEFAULT now()
);


--
-- Name: links_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.links_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.links_id_seq OWNED BY public.links.id;


--
-- Name: logintoken; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.logintoken (
    id integer NOT NULL,
    userid integer NOT NULL,
    token text NOT NULL,
    createdat timestamp without time zone DEFAULT now()
);


--
-- Name: logintoken_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.logintoken_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: logintoken_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.logintoken_id_seq OWNED BY public.logintoken.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    createdat timestamp without time zone DEFAULT now()
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: links id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.links ALTER COLUMN id SET DEFAULT nextval('public.links_id_seq'::regclass);


--
-- Name: logintoken id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.logintoken ALTER COLUMN id SET DEFAULT nextval('public.logintoken_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: links; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.links VALUES (5, 3, 'https://bootcampra.notion.site/Projeto-Shortly-API-21533489cd5042058524caf3429b62e4', 'WrIYu', 0, '2022-10-16 18:57:13.398648');
INSERT INTO public.links VALUES (6, 3, 'https://gist.github.com', 'FJBG8', 0, '2022-10-16 18:58:16.36388');
INSERT INTO public.links VALUES (4, 1, 'https://www.youtube.com/ola', 'b3yoh', 1, '2022-10-15 18:33:16.762319');
INSERT INTO public.links VALUES (7, 3, 'https://talktomeinkorean.com/wp-login.php?redirect_to=https%3A%2F%2Ftalktomeinkorean.com%2Flearningcenter%2F', '3p5QP', 6, '2022-10-16 18:59:19.483105');
INSERT INTO public.links VALUES (9, 3, 'https://game-news24.com/2022/07/02/genshin-impact-3-0-leak-reveals-new-nilou-gameplay-burst-skills/', '1AXUW', 0, '2022-10-17 17:36:11.501797');
INSERT INTO public.links VALUES (8, 3, 'https://www.vlive.tv/home/chart?sub=VIDEO&period=HOUR_24&country=ALL', '-mtK5', 13, '2022-10-16 19:03:11.36069');
INSERT INTO public.links VALUES (10, 4, 'https://img.game-news24.com/2022/07/Genshin-impact-3-0-Leak-Reveals-New-Nilou-Gameplay-Burst-Skills.jpeg', 'LqfZl', 0, '2022-10-17 17:45:23.734195');
INSERT INTO public.links VALUES (11, 4, 'https://game-news24.com/2022/10/17/destiny-2-is-about-halloween-the-end-of-the-journey-and-gun-tweaks-will-be-done/', 'ubILH', 0, '2022-10-17 17:45:47.669163');


--
-- Data for Name: logintoken; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.logintoken VALUES (1, 1, 'a28f02a8-4f36-486b-b376-1ef680b42c29', '2022-10-13 15:54:44.195947');
INSERT INTO public.logintoken VALUES (2, 1, '2634cd7b-0b06-43c2-ab87-6425a91fabe3', '2022-10-13 16:09:44.65615');
INSERT INTO public.logintoken VALUES (3, 1, '22b2381f-d390-4dd8-82e8-6f9d2d5845eb', '2022-10-13 16:09:52.025274');
INSERT INTO public.logintoken VALUES (4, 3, '51ecc007-7a90-4841-bb7e-bfad28de793b', '2022-10-15 18:30:40.425365');
INSERT INTO public.logintoken VALUES (5, 2, '5fb1bb0b-6a2b-47b8-b47d-f97afef8ad51', '2022-10-15 18:30:51.627151');
INSERT INTO public.logintoken VALUES (6, 2, 'bac27bbd-30ba-4f8c-af45-9b6a7527bdb5', '2022-10-17 17:30:09.0694');
INSERT INTO public.logintoken VALUES (7, 4, '711bc731-356e-48fc-9529-89ff1e648a04', '2022-10-17 17:43:53.017557');


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (1, 'Joelma', 'calypsyoo@gmail.com', '$2b$10$kGAiGTreuLXpjI7WGn./UO0ryYZDqw0Ns.KvppskjOF5.HdjEUMv2', '2022-10-13 15:44:23.369892');
INSERT INTO public.users VALUES (2, 'Olivia', 'ilongforyouolivia@gmail.com', '$2b$10$OQlF22QRVBRYDx83hcsQpud/.8mQlBkEvG6mJWGRv6OxF1y5yUCPO', '2022-10-15 18:28:52.517129');
INSERT INTO public.users VALUES (3, 'Diana', 'letmefireinsidethoseeyes@gmail.com', '$2b$10$Xx8ptIhNH.VZpGdAG2NROeazZndW9g9biGnk2DiG90VxrvILHUxoi', '2022-10-15 18:30:26.0722');
INSERT INTO public.users VALUES (4, 'Young K', 'imhandsomeandiknowit@gmail.com', '$2b$10$sdA5mnf1Qnqm/p7DGSUag.awc0EpOBcZQd2iGkT/2ZLZ/C6KeMdyW', '2022-10-17 17:31:03.367428');


--
-- Name: links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.links_id_seq', 11, true);


--
-- Name: logintoken_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.logintoken_id_seq', 7, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 4, true);


--
-- Name: links links_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.links
    ADD CONSTRAINT links_pkey PRIMARY KEY (id);


--
-- Name: logintoken logintoken_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.logintoken
    ADD CONSTRAINT logintoken_pkey PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: links links_userid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.links
    ADD CONSTRAINT links_userid_fkey FOREIGN KEY (userid) REFERENCES public.users(id);


--
-- Name: logintoken logintoken_userid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.logintoken
    ADD CONSTRAINT logintoken_userid_fkey FOREIGN KEY (userid) REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

