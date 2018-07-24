#!/usr/bin/env node

/* eslint-disable no-console */

'use strict'

const SonarLint = require('sonarjs')
const Path = require('path')
const { check } = require('nodejs-fx')

const sources = Path.resolve('src')

const runSonarJS = () =>
  SonarLint.analyze(sources, { onStart })
    .then(issues =>
      check(issues)
        .on(noIssues, showSuccess)
        .otherwise(() => logAndExit(issues)))

const noIssues = x => x.length === 0

const showSuccess = () => console.log('Analysis finished without issues!')

const onStart = () => console.log('Analysis started')

const formatMsg = issue =>
  `${lineDelimiter()}\n
Severity: ${issue.severity}
Title: ${issue.title}
Action: ${issue.message}
File: ${issue.file}
Line: ${issue.pos.line}
Column: ${issue.pos.column}\n`

const lineDelimiter = () => Array(100).map(() => '-').join()

const logAndExit = issues => {
  console.log(`Found issue(s): ${issues.length}\n${issues.map(formatMsg)}`)
  return process.exit(1)
}

runSonarJS()
