(params) => {
  const params = {logGroupName: "/aws/ecs/prod/web",
               filterPattern: params.filterPattern,
               startTime: params.startTime,
               endTime: params.endTime}
  return api.run("aws_cloudwatch_logs.filter_log_events", params)
 
}

/*
 * For sample code and reference material, visit
 * https://api-composition.transposit.com/references/js-operations
 */