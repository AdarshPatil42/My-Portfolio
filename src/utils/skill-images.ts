import html from "../assets/images/skills/html.svg";
import css from "../assets/images/skills/css.svg";
import js from "../assets/images/skills/javascript.svg";
import ts from "../assets/images/skills/typescript.svg";
import react from "../assets/images/skills/react.svg";
import angular from "../assets/images/skills/angular.svg";
import redux from "../assets/images/skills/redux.svg";
import tailwind from "../assets/images/skills/tailwind.svg";
import materialui from "../assets/images/skills/materialui.svg";
import bootstrap from "../assets/images/skills/bootstrap.svg";
import mongodb from "../assets/images/skills/mongo.svg";
import mysql from "../assets/images/skills/mysql.svg";
import postgresql from "../assets/images/skills/postgresql.svg";
import git from "../assets/images/skills/git.svg";
import jira from "../assets/images/skills/jira.svg";
import aws from "../assets/images/skills/aws.svg";
import docker from "../assets/images/skills/docker.svg";
import figma from "../assets/images/skills/figma.svg";
import firebase from "../assets/images/skills/firebase.svg";
import nodejs from "../assets/images/skills/node-js.svg";
import nestjs from "../assets/images/skills/nest-js.svg";
import expressjs from "../assets/images/skills/express.svg";
import sequelize from "../assets/images/skills/sequelize.svg";
import typeorm from "../assets/images/skills/Typeorm.svg";
import vite from "../assets/images/skills/vitejs.svg";

export const skillsImage = (skill: string) => {
  const skillCheck = skill.toLowerCase();
  switch (skillCheck) {
    case "html":
      return html;
    case "css":
      return css;
    case "javascript":
      return js;
    case "typescript":
      return ts;
    case "react":
      return react;
    case "angular":
      return angular;
    case "redux":
      return redux;
    case "vite":
      return vite;
    case "tailwind":
      return tailwind;
    case "materialui":
      return materialui;
    case "bootstrap":
      return bootstrap;
    case "mongodb":
      return mongodb;
    case "mysql":
      return mysql;
    case "postgresql":
      return postgresql;
    case "git":
      return git;
    case "jira":
      return jira;
    case "aws":
      return aws;
    case "docker":
      return docker;
    case "figma":
      return figma;
    case "firebase":
      return firebase;
    case "node.js":
      return nodejs;
    case "nest.js":
      return nestjs;
    case "express.js":
      return expressjs;
    case "sequelize":
      return sequelize;
    case "typeorm":
      return typeorm;
    default:
      return null;
  }
};
