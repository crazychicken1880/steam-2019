module.exports = function(gender, age_group, distance, stroke, medal){
  return  { request: {
        slots: {
            Stroke:
            {
                name: 'Stroke',
                value: stroke,
                confirmationStatus: 'NONE',
                source: 'USER'
            },
            Medal:
            {
                name: 'Medal',
                value: medal,
                confirmationStatus: 'NONE',
                source: 'USER'
            },
            Gender:
            {
                name: 'Gender',
                value: gender,
                confirmationStatus: 'NONE',
                source: 'USER'
            },
            AgeGroup:
            {
                name: 'AgeGroup',
                value: age_group,
                confirmationStatus: 'NONE',
                source: 'USER'
            },
            Yardage:
            {
                name: 'Yardage',
                value: distance,
                confirmationStatus: 'NONE',
                source: 'USER'
            }
        }
    }
  }
}